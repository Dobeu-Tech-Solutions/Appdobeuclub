import { Router, Request, Response } from 'express';
import Portfolio from '../lib/models/Portfolio';

const router = Router();

// GET /api/portfolio - List portfolio items
router.get('/', async (req: Request, res: Response) => {
  try {
    const {
      category,
      featured,
      limit = '10',
      page = '1',
    } = req.query;

    const limitNum = parseInt(limit as string);
    const pageNum = parseInt(page as string);
    const skip = (pageNum - 1) * limitNum;

    // Build query - only show published items
    const query: any = { published: true };
    if (category) query.category = category;
    if (featured === 'true') query.featured = true;

    // Fetch portfolio items
    const portfolios = await Portfolio
      .find(query)
      .sort({ order: 1, createdAt: -1 })
      .limit(limitNum)
      .skip(skip)
      .lean();

    // Get total count for pagination
    const total = await Portfolio.countDocuments(query);

    return res.status(200).json({
      portfolios,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('Portfolio fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch portfolio items' });
  }
});

// GET /api/portfolio/:slug - Get portfolio item by slug
router.get('/:slug', async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    // Find portfolio by slug
    const portfolio = await Portfolio.findOne({ slug, published: true });

    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio item not found' });
    }

    // Increment view count
    portfolio.views += 1;
    await portfolio.save();

    return res.status(200).json({ portfolio });
  } catch (error) {
    console.error('Portfolio detail error:', error);
    return res.status(500).json({ error: 'Failed to fetch portfolio item' });
  }
});

export default router;
