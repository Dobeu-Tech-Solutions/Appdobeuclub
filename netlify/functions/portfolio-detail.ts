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
    const slug = params.slug;

    if (!slug) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required parameter: slug' }),
      };
    }

    await dbConnect();

    // Find portfolio by slug
    const portfolio = await Portfolio.findOne({ slug, published: true });

    if (!portfolio) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Portfolio item not found' }),
      };
    }

    // Increment view count
    portfolio.views += 1;
    await portfolio.save();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ portfolio }),
    };
  } catch (error) {
    console.error('Portfolio detail error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch portfolio item' }),
    };
  }
};
