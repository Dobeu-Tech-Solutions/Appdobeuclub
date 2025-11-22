import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import dbConnect from '../../server/lib/mongodb';
import User from '../../server/lib/models/User';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const {
      supabaseId,
      email,
      name,
      phone,
      company,
      newsletterSubscribed = false,
      smsOptIn = false,
      emailVerified = false,
    } = body;

    if (!supabaseId || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: supabaseId and email' }),
      };
    }

    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { supabaseId }],
    });

    if (existingUser) {
      // Update existing user (in case of OAuth login)
      existingUser.supabaseId = supabaseId;
      existingUser.emailVerified = emailVerified || existingUser.emailVerified;
      if (name) existingUser.name = name;
      if (phone) existingUser.phone = phone;
      await existingUser.save();

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: existingUser }),
      };
    }

    // Create new user
    const user = await User.create({
      supabaseId,
      email,
      name,
      phone,
      emailVerified,
      newsletterSubscribed,
      smsOptIn,
      role: 'client',
      language: 'en',
      theme: 'system',
    });

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
