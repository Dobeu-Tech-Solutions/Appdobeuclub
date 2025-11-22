import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import dbConnect from '../../server/lib/mongodb';
import Analytics from '../../server/lib/models/Analytics';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle POST requests for creating analytics
  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body || '{}');
      const {
        event: eventName,
        category,
        data = {},
        userId,
        sessionId,
        metadata = {},
      } = body;

      if (!eventName || !category || !sessionId) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing required fields: event, category, sessionId' }),
        };
      }

      await dbConnect();

      // Add IP address from headers
      metadata.ip = event.headers['x-forwarded-for'] ||
                    event.headers['client-ip'] ||
                    undefined;
      metadata.userAgent = event.headers['user-agent'];
      metadata.referrer = event.headers['referer'];

      // Create analytics entry
      await Analytics.create({
        event: eventName,
        category,
        userId,
        sessionId,
        data,
        metadata,
      });

      return {
        statusCode: 201,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ success: true }),
      };
    } catch (error) {
      console.error('Analytics tracking error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to track analytics' }),
      };
    }
  }

  // Handle GET requests for fetching analytics
  if (event.httpMethod === 'GET') {
    try {
      const params = event.queryStringParameters || {};
      const eventName = params.event;
      const category = params.category;
      const startDate = params.startDate;
      const endDate = params.endDate;
      const limit = parseInt(params.limit || '100');

      await dbConnect();

      // Build query
      const query: any = {};
      if (eventName) query.event = eventName;
      if (category) query.category = category;
      if (startDate || endDate) {
        query.createdAt = {};
        if (startDate) query.createdAt.$gte = new Date(startDate);
        if (endDate) query.createdAt.$lte = new Date(endDate);
      }

      const analytics = await Analytics
        .find(query)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean();

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ analytics }),
      };
    } catch (error) {
      console.error('Analytics fetch error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch analytics' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
};
