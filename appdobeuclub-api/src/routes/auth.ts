import { Router, Request, Response } from 'express';
import User from '../lib/models/User';

const router = Router();

// POST /api/auth/register - Register or update user
router.post('/register', async (req: Request, res: Response) => {
  try {
    const {
      supabaseId,
      email,
      name,
      phone,
      company,
      newsletterSubscribed = false,
      smsOptIn = false,
      emailVerified = false,
    } = req.body;

    if (!supabaseId || !email) {
      return res.status(400).json({
        error: 'Missing required fields: supabaseId and email',
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { supabaseId }],
    });

    if (existingUser) {
      // Update existing user
      existingUser.supabaseId = supabaseId;
      existingUser.emailVerified = emailVerified || existingUser.emailVerified;
      if (name) existingUser.name = name;
      if (phone) existingUser.phone = phone;
      existingUser.lastLogin = new Date();
      await existingUser.save();

      return res.status(200).json({ user: existingUser });
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
      lastLogin: new Date(),
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/auth/user/:supabaseId - Get user by Supabase ID
router.get('/user/:supabaseId', async (req: Request, res: Response) => {
  try {
    const { supabaseId } = req.params;

    const user = await User.findOne({ supabaseId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error('User fetch error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
