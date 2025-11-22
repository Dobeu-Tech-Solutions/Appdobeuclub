import { Router, Request, Response } from 'express';
import Invoice from '../lib/models/Invoice';
import User from '../lib/models/User';

const router = Router();

// Note: In production, these routes should be protected with authentication middleware
// For now, they are open for development/testing purposes

// GET /api/admin/invoices - List all invoices
router.get('/invoices', async (req: Request, res: Response) => {
  try {
    const {
      status,
      limit = '50',
      page = '1',
    } = req.query;

    const limitNum = parseInt(limit as string);
    const pageNum = parseInt(page as string);
    const skip = (pageNum - 1) * limitNum;

    const query: any = {};
    if (status) query.status = status;

    const invoices = await Invoice
      .find(query)
      .populate('client', 'name email')
      .sort({ createdAt: -1 })
      .limit(limitNum)
      .skip(skip)
      .lean();

    const total = await Invoice.countDocuments(query);

    return res.status(200).json({
      invoices,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('Invoices fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch invoices' });
  }
});

// GET /api/admin/revenue-stats - Get revenue statistics
router.get('/revenue-stats', async (req: Request, res: Response) => {
  try {
    const { year } = req.query;
    const targetYear = year ? parseInt(year as string) : new Date().getFullYear();

    // Get paid invoices for the year
    const paidInvoices = await Invoice.find({
      status: 'paid',
      paidAt: {
        $gte: new Date(targetYear, 0, 1),
        $lt: new Date(targetYear + 1, 0, 1),
      },
    });

    const totalRevenue = paidInvoices.reduce((sum, inv) => sum + inv.total, 0);
    const totalInvoices = paidInvoices.length;
    const averageInvoice = totalInvoices > 0 ? totalRevenue / totalInvoices : 0;

    // Monthly breakdown
    const monthlyRevenue = Array(12).fill(0);
    paidInvoices.forEach(inv => {
      const month = inv.paidAt ? new Date(inv.paidAt).getMonth() : 0;
      monthlyRevenue[month] += inv.total;
    });

    return res.status(200).json({
      year: targetYear,
      totalRevenue,
      totalInvoices,
      averageInvoice,
      monthlyRevenue,
    });
  } catch (error) {
    console.error('Revenue stats error:', error);
    return res.status(500).json({ error: 'Failed to fetch revenue statistics' });
  }
});

// GET /api/admin/clients - List all clients
router.get('/clients', async (req: Request, res: Response) => {
  try {
    const {
      role,
      limit = '50',
      page = '1',
    } = req.query;

    const limitNum = parseInt(limit as string);
    const pageNum = parseInt(page as string);
    const skip = (pageNum - 1) * limitNum;

    const query: any = {};
    if (role) query.role = role;

    const clients = await User
      .find(query)
      .select('-__v')
      .sort({ createdAt: -1 })
      .limit(limitNum)
      .skip(skip)
      .lean();

    const total = await User.countDocuments(query);

    return res.status(200).json({
      clients,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('Clients fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

export default router;
