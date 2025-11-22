import { Router, Request, Response } from 'express';
import Analytics from '../lib/models/Analytics';

const router = Router();

// POST /api/analytics/track - Track analytics event
router.post('/track', async (req: Request, res: Response) => {
  try {
    const {
      event,
      category,
      data = {},
      userId,
      sessionId,
      metadata = {},
    } = req.body;

    if (!event || !category || !sessionId) {
      return res.status(400).json({
        error: 'Missing required fields: event, category, sessionId',
      });
    }

    // Add IP address from request
    metadata.ip = req.ip;
    metadata.userAgent = req.get('user-agent');
    metadata.referrer = req.get('referer');

    // Create analytics entry
    await Analytics.create({
      event,
      category,
      userId,
      sessionId,
      data,
      metadata,
    });

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return res.status(500).json({ error: 'Failed to track analytics' });
  }
});

// GET /api/analytics - Get analytics data (with filters)
router.get('/', async (req: Request, res: Response) => {
  try {
    const {
      event,
      category,
      startDate,
      endDate,
      limit = '100',
    } = req.query;

    // Build query
    const query: any = {};
    if (event) query.event = event;
    if (category) query.category = category;
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate as string);
      if (endDate) query.createdAt.$lte = new Date(endDate as string);
    }

    const analytics = await Analytics
      .find(query)
      .limit(parseInt(limit as string))
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({ analytics });
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

export default router;
