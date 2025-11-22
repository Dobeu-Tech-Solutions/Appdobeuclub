import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import dbConnect from '../../server/lib/mongodb';
import Quote from '../../server/lib/models/Quote';
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
      projectName,
      projectType,
      budget,
      timeline,
      description,
      services,
      hasExistingSystem,
      existingSystemDetails,
      urgency,
      preferredContactMethod,
    } = body;

    await dbConnect();

    // Create contact record
    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      subject: `Quote Request: ${projectName}`,
      message: description,
      source: 'quote_request',
      priority: urgency === 'urgent' || urgency === 'high' ? 'high' : 'medium',
      metadata: {
        ip: event.headers['x-forwarded-for'] || event.headers['client-ip'],
        userAgent: event.headers['user-agent'],
        referrer: event.headers['referer'],
      },
    });

    // Calculate estimated cost based on budget range
    const budgetMap: Record<string, { min: number; max: number }> = {
      'under_5k': { min: 1000, max: 5000 },
      '5k_10k': { min: 5000, max: 10000 },
      '10k_25k': { min: 10000, max: 25000 },
      '25k_50k': { min: 25000, max: 50000 },
      'over_50k': { min: 50000, max: 100000 },
      'flexible': { min: 0, max: 0 },
    };

    const budgetRange = budgetMap[budget] || { min: 0, max: 0 };
    const estimatedAmount = budgetRange.min + (budgetRange.max - budgetRange.min) / 2;

    // Create quote
    const quote = await Quote.create({
      client: contact._id,
      projectName,
      projectScope: description,
      services,
      issueDate: new Date(),
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      status: 'draft',
      items: [
        {
          service: services.join(', '),
          description: `${projectType} - ${timeline}`,
          quantity: 1,
          rate: estimatedAmount,
          amount: estimatedAmount,
        },
      ],
      subtotal: estimatedAmount,
      discount: 0,
      discountType: 'percentage',
      total: estimatedAmount,
      currency: 'USD',
      notes: `Additional Information:\n${hasExistingSystem ? `Existing System: ${existingSystemDetails}` : 'No existing system'}\nUrgency: ${urgency}\nPreferred Contact: ${preferredContactMethod}`,
    });

    // Track analytics
    await Analytics.create({
      event: 'quote_requested',
      category: 'conversion',
      sessionId: event.headers['x-session-id'] || 'unknown',
      data: {
        quoteId: quote.quoteNumber,
        projectType,
        budget,
        timeline,
        servicesCount: services.length,
        urgency,
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
        quoteNumber: quote.quoteNumber,
        contactId: contact._id,
      }),
    };
  } catch (error) {
    console.error('Quote request error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit quote request' }),
    };
  }
};
