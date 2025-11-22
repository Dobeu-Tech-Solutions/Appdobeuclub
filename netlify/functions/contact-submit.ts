import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import dbConnect from '../../server/lib/mongodb';
import Contact from '../../server/lib/models/Contact';
import Analytics from '../../server/lib/models/Analytics';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
      source = 'contact_form',
    } = body;

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: name, email, subject, message' }),
      };
    }

    await dbConnect();

    // Create contact record
    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      subject,
      message,
      source,
      status: 'new',
      priority: 'medium',
      metadata: {
        ip: event.headers['x-forwarded-for'] || event.headers['client-ip'],
        userAgent: event.headers['user-agent'],
        referrer: event.headers['referer'],
      },
    });

    // Track analytics
    await Analytics.create({
      event: 'contact_form_submitted',
      category: 'conversion',
      sessionId: event.headers['x-session-id'] || 'unknown',
      data: {
        contactId: contact._id,
        source,
      },
      metadata: {
        ip: event.headers['x-forwarded-for'] || event.headers['client-ip'],
        userAgent: event.headers['user-agent'],
      },
    });

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        contactId: contact._id,
        message: 'Thank you for contacting us! We will get back to you soon.',
      }),
    };
  } catch (error) {
    console.error('Contact submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit contact form' }),
    };
  }
};
