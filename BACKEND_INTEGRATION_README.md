# Backend Integration Complete! 🎉

This document explains the MongoDB backend integration into your appdobeuclub repository.

## 🎯 What Was Done

### ✅ 1. MongoDB Models Migrated
All 7 database models from dobeucloud have been copied to `/server/lib/models/`:

- **User.ts** - User accounts with Supabase integration
- **Quote.ts** - Quote requests and proposals
- **Invoice.ts** - Invoicing system
- **Contact.ts** - Contact form submissions
- **Portfolio.ts** - Portfolio showcase items
- **Analytics.ts** - Custom event tracking
- **Appointment.ts** - Appointment scheduling

### ✅ 2. Netlify Functions Created (Option 1)
6 serverless functions in `/netlify/functions/`:

- `auth-register.ts` - User registration
- `analytics-track.ts` - Analytics tracking
- `quotes-request.ts` - Quote submission
- `contact-submit.ts` - Contact form
- `portfolio-list.ts` - Portfolio listing
- `portfolio-detail.ts` - Portfolio details

**Usage:**
```javascript
// In your React app
const response = await fetch('/.netlify/functions/quotes-request', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ /* quote data */ })
});
```

### ✅ 3. Express.js API Created (Option 2)
Complete REST API in `/appdobeuclub-api/`:

- Full Express server with TypeScript
- 6 route modules (auth, quotes, analytics, contact, portfolio, admin)
- Security middleware (Helmet, CORS, rate limiting)
- Ready to deploy to Railway, Render, Fly.io, or Heroku

**Usage:**
```javascript
// In your React app
const response = await fetch('https://your-api-url.com/api/quotes/request', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ /* quote data */ })
});
```

---

## 🚀 How to Use

### Using Netlify Functions (Recommended for your current setup)

**1. Install dependencies:**
```bash
npm install
```

**2. Set up environment variables in Netlify:**

Go to your Netlify dashboard → Site Settings → Environment Variables and add:

```
MONGODB_URI=mongodb+srv://jeremyw_db_user:...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

**3. Deploy to Netlify:**
```bash
npm run build
# Netlify will automatically deploy your functions
```

**4. Test your functions:**
```bash
# Health check
curl https://app.dobeu.net/.netlify/functions/health

# Submit contact form
curl -X POST https://app.dobeu.net/.netlify/functions/contact-submit \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","subject":"Test","message":"Hello"}'
```

### Using Express.js API (For more control)

**1. Navigate to API directory:**
```bash
cd appdobeuclub-api
```

**2. Install dependencies:**
```bash
npm install
```

**3. Set up environment:**
```bash
cp .env.example .env
# Edit .env with your credentials
```

**4. Run locally:**
```bash
npm run dev
# Server runs on http://localhost:4000
```

**5. Deploy to Railway (easiest):**
```bash
npm i -g @railway/cli
railway login
railway init
railway variables set MONGODB_URI="your_uri"
railway up
```

---

## 📋 API Endpoints Reference

### Netlify Functions
- `/.netlify/functions/auth-register` - POST
- `/.netlify/functions/analytics-track` - POST, GET
- `/.netlify/functions/quotes-request` - POST
- `/.netlify/functions/contact-submit` - POST
- `/.netlify/functions/portfolio-list` - GET
- `/.netlify/functions/portfolio-detail` - GET

### Express API
- `/api/auth/register` - POST
- `/api/auth/user/:supabaseId` - GET
- `/api/quotes/request` - POST
- `/api/analytics/track` - POST
- `/api/analytics` - GET
- `/api/contact/submit` - POST
- `/api/portfolio` - GET
- `/api/portfolio/:slug` - GET
- `/api/admin/invoices` - GET
- `/api/admin/revenue-stats` - GET
- `/api/admin/clients` - GET

---

## 🔐 Environment Variables

### Required for Netlify Functions

Add these in **Netlify Dashboard → Site Settings → Environment Variables**:

```env
MONGODB_URI=mongodb+srv://jeremyw_db_user:4l7pQxun7GnBnSUc@cluster0.pqf8x5.mongodb.net/dobeucloud?retryWrites=true&w=majority
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_role_key
ADMIN_EMAIL=admin@dobeu.net
```

### Required for Express API

In `appdobeuclub-api/.env`:

```env
MONGODB_URI=...
PORT=4000
NODE_ENV=production
ALLOWED_ORIGINS=https://app.dobeu.net
```

---

## 💡 Integration Examples

### Example 1: Submit Contact Form

```typescript
// In your React component
const handleSubmit = async (formData) => {
  try {
    const response = await fetch('/.netlify/functions/contact-submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Thank you! We will be in touch soon.');
    } else {
      alert('Error: ' + result.error);
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
};
```

### Example 2: Track Analytics

```typescript
// Track page view
const trackPageView = async (pageName) => {
  await fetch('/.netlify/functions/analytics-track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event: 'page_view',
      category: 'page_view',
      sessionId: getSessionId(), // Your session logic
      data: { page: pageName },
    }),
  });
};
```

### Example 3: Request Quote

```typescript
const requestQuote = async (quoteData) => {
  const response = await fetch('/.netlify/functions/quotes-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: quoteData.name,
      email: quoteData.email,
      projectName: quoteData.projectName,
      projectType: quoteData.projectType,
      budget: quoteData.budget,
      timeline: quoteData.timeline,
      description: quoteData.description,
      services: quoteData.services,
      urgency: 'medium',
      preferredContactMethod: 'email',
    }),
  });

  return await response.json();
};
```

---

## 🎨 No UI Changes

**Important**: Your current UI at https://app.dobeu.net remains **completely unchanged**. All the integration is:

- Backend API endpoints only
- Database models
- Server-side logic

Your existing React components (Hero, Mission, Services, Work, Pricing) are untouched!

---

## 📝 Next Steps

1. **Choose your deployment method:**
   - Netlify Functions (easiest for current setup)
   - Express API (more control, separate deployment)

2. **Set up environment variables:**
   - Netlify: In dashboard
   - Express: In `.env` file

3. **Test the endpoints:**
   - Use curl, Postman, or your React app

4. **Integrate into your React components:**
   - Add API calls where needed
   - Handle responses and errors

5. **Deploy and monitor:**
   - Push changes to GitHub
   - Monitor Netlify/Railway logs

---

## 🆘 Troubleshooting

### Netlify Functions not working
- Check Netlify build logs
- Verify environment variables are set
- Check function size (max 50MB)

### MongoDB connection errors
- Verify MONGODB_URI is correct
- Check MongoDB Atlas IP whitelist (allow all: 0.0.0.0/0)
- Ensure database user has correct permissions

### CORS errors
- Add your domain to ALLOWED_ORIGINS
- Check Netlify redirects configuration

---

## 📚 Documentation

- **MongoDB Models**: See `server/lib/models/`
- **Netlify Functions**: See `netlify/functions/`
- **Express API**: See `appdobeuclub-api/README.md`
- **Migration Guide**: See `MONGODB_MIGRATION_GUIDE.md`

---

## ✅ Summary

You now have:
1. ✅ All MongoDB models from dobeucloud
2. ✅ 6 Netlify Functions ready to use
3. ✅ Complete Express.js API (alternative option)
4. ✅ Updated package.json with dependencies
5. ✅ Environment configuration files
6. ✅ Deployment guides for both options

**Your UI/UX is unchanged. Backend is ready to integrate!** 🚀
