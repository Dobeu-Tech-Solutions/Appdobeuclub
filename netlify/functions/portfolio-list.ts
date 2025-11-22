import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import dbConnect from '../../server/lib/mongodb';
import Portfolio from '../../server/lib/models/Portfolio';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const params = event.queryStringParameters || {};
    const category = params.category;
    const featured = params.featured === 'true';
    const limit = parseInt(params.limit || '10');
    const page = parseInt(params.page || '1');
    const skip = (page - 1) * limit;

    await dbConnect();

    // Build query - only show published items
    const query: any = { published: true };
    if (category) query.category = category;
    if (featured) query.featured = true;

    // Fetch portfolio items
    const portfolios = await Portfolio
      .find(query)
      .sort({ order: 1, createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean();

    // Get total count for pagination
    const total = await Portfolio.countDocuments(query);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        portfolios,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit),
        },
      }),
    };
  } catch (error) {
    console.error('Portfolio fetch error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch portfolio items' }),
    };
  }
};
