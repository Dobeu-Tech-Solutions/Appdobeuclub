import { Router, Request, Response } from 'express';
import Contact from '../lib/models/Contact';
import Analytics from '../lib/models/Analytics';

const router = Router();

// POST /api/contact/submit - Submit contact form
router.post('/submit', async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
      source = 'contact_form',
    } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, subject, message',
      });
    }

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
        ip: req.ip,
        userAgent: req.get('user-agent'),
        referrer: req.get('referer'),
      },
    });

    // Track analytics
    await Analytics.create({
      event: 'contact_form_submitted',
      category: 'conversion',
      sessionId: req.get('x-session-id') || 'unknown',
      data: {
        contactId: contact._id,
        source,
      },
      metadata: {
        ip: req.ip,
        userAgent: req.get('user-agent'),
      },
    });

    return res.status(201).json({
      success: true,
      contactId: contact._id,
      message: 'Thank you for contacting us! We will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

export default router;
