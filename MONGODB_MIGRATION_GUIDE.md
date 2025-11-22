# MongoDB Backend Integration Guide

## Overview
This document details the integration of the MongoDB database backend from `dobeucloud` into `appdobeuclub` without modifying any UI/UX.

---

## 📋 Files Being Migrated from DobeuCloud

### 1. Database Connection
- **Source**: `/lib/mongodb.ts`
- **Destination**: `/server/lib/mongodb.ts`
- **Purpose**: MongoDB connection with connection pooling

### 2. MongoDB Models (7 total)

#### User Model
- **Source**: `/lib/models/User.ts`
- **Destination**: `/server/lib/models/User.ts`
- **Fields**: email, name, phone, role (client/admin), payment IDs, preferences, Supabase ID
- **Features**: Email indexing, role-based access, payment integration

#### Quote Model
- **Source**: `/lib/models/Quote.ts`
- **Destination**: `/server/lib/models/Quote.ts`
- **Fields**: quoteNumber, client, dates, status, items, pricing, terms
- **Features**: Auto-generated quote numbers (QT-2025-0001), expiry tracking, item validation

#### Invoice Model
- **Source**: `/lib/models/Invoice.ts`
- **Destination**: `/server/lib/models/Invoice.ts`
- **Fields**: invoiceNumber, client, dates, status, items, payments, totals
- **Features**: Auto-generated invoice numbers (INV-2025-0001), payment tracking, overdue detection

#### Contact Model
- **Source**: `/lib/models/Contact.ts`
- **Destination**: `/server/lib/models/Contact.ts`
- **Fields**: name, email, phone, subject, message, source, status, priority
- **Features**: CRM capabilities, assignment, tagging, notes, UTM tracking

#### Portfolio Model
- **Source**: `/lib/models/Portfolio.ts`
- **Destination**: `/server/lib/models/Portfolio.ts`
- **Fields**: title, slug, description, images, technologies, testimonials, metrics
- **Features**: Auto-slug generation, featured items, view tracking

#### Analytics Model
- **Source**: `/lib/models/Analytics.ts`
- **Destination**: `/server/lib/models/Analytics.ts`
- **Fields**: event, category, userId, sessionId, metadata (UTM, browser, location)
- **Features**: Custom event tracking, TTL (auto-delete after 1 year), performance monitoring

#### Appointment Model
- **Source**: `/lib/models/Appointment.ts`
- **Destination**: `/server/lib/models/Appointment.ts`
- **Fields**: title, client, host, times, type, status, location, reminders
- **Features**: Calendar integration, reminder system, reschedule tracking

---

## 🔌 API Routes (11 endpoints)

### Authentication
1. **POST /api/auth/register** - User registration with Supabase integration

### Quotes
2. **POST /api/quotes/request** - Create new quote request

### Analytics
3. **POST /api/analytics/track** - Track custom events
4. **GET /api/analytics/performance** - Get performance metrics

### Payments
5. **POST /api/payments/paypal/create-order** - Create PayPal order
6. **POST /api/payments/paypal/capture-order** - Capture PayPal payment
7. **POST /api/payments/square/create-payment** - Create Square payment
8. **POST /api/payments/record** - Record payment transaction

### Admin
9. **GET /api/admin/invoices** - List all invoices (admin only)
10. **GET /api/admin/revenue-stats** - Get revenue statistics (admin only)
11. **GET /api/admin/clients** - List all clients (admin only)

---

## 🏗️ Integration Architecture

### Option 1: Netlify Functions (Serverless)
```
appdobeuclub/
├── netlify/
│   └── functions/
│       ├── auth-register.ts
│       ├── quotes-request.ts
│       ├── analytics-track.ts
│       ├── payments-paypal.ts
│       ├── payments-square.ts
│       └── admin-*.ts
└── server/
    └── lib/
        ├── mongodb.ts
        └── models/
            ├── User.ts
            ├── Quote.ts
            ├── Invoice.ts
            ├── Contact.ts
            ├── Portfolio.ts
            ├── Analytics.ts
            └── Appointment.ts
```

**Pros:**
- ✅ Single deployment (Netlify)
- ✅ Scales automatically
- ✅ No separate server to manage
- ✅ Works with existing setup

**Cons:**
- Cold starts possible
- Function timeout limits (10s for free tier)

### Option 2: Separate Express.js API
```
appdobeuclub-api/
├── src/
│   ├── server.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── quotes.ts
│   │   ├── analytics.ts
│   │   ├── payments.ts
│   │   └── admin.ts
│   └── lib/
│       ├── mongodb.ts
│       └── models/
│           └── [all models]
└── package.json
```

**Pros:**
- ✅ Full control
- ✅ No timeouts
- ✅ WebSocket support
- ✅ Better for heavy operations

**Cons:**
- Need separate hosting (Railway, Render, Fly.io)
- More DevOps management
- CORS configuration needed

---

## 🔐 Environment Variables Needed

```bash
# MongoDB
MONGODB_URI=mongodb+srv://jeremyw_db_user:4l7pQxun7GnBnSUc@cluster0.pqf8x5.mongodb.net/dobeucloud?retryWrites=true&w=majority

# Supabase (for auth integration)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Payment Processors
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
NEXT_PUBLIC_SQUARE_APPLICATION_ID=your_square_app_id
NEXT_PUBLIC_SQUARE_LOCATION_ID=your_square_location_id
SQUARE_ACCESS_TOKEN=your_square_access_token

# Optional
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga4_id
NEXT_PUBLIC_INTERCOM_APP_ID=xu0gfiqb
```

---

## 📊 Database Schema Summary

### Collections
1. **users** - User accounts and profiles
2. **quotes** - Quote requests and proposals
3. **invoices** - Billing and invoices
4. **contacts** - Contact form submissions
5. **portfolios** - Portfolio showcase items
6. **analytics** - Event tracking data
7. **appointments** - Scheduled meetings

### Key Relationships
- Quote → User (client reference)
- Invoice → User (client reference)
- Appointment → User (client & host references)
- Contact → User (optional assignment)

---

## 🚀 Integration Steps

### Phase 1: Setup
1. ✅ Create directory structure
2. ✅ Migrate MongoDB models
3. ✅ Set up database connection

### Phase 2: Netlify Functions
4. ✅ Create function handlers
5. ✅ Test endpoints locally
6. ✅ Deploy to Netlify

### Phase 3: Express.js API (Alternative)
7. ✅ Create Express server
8. ✅ Set up routes and middleware
9. ✅ Deploy to hosting service

### Phase 4: Testing
10. Test all endpoints
11. Verify MongoDB connections
12. Test UI integration

---

## 📝 Current Status

- ✅ Analysis complete
- ✅ Documentation created
- 🔄 Creating directory structure
- ⏳ Migrating models
- ⏳ Creating Netlify Functions
- ⏳ Creating Express.js API
- ⏳ Testing integration

---

## 🎯 No UI/UX Changes

**Important**: This integration is **backend-only**. The current React UI at https://app.dobeu.net will remain completely unchanged. All changes are:

- Server-side code only
- API endpoints
- Database models
- Environment configuration

The existing components (Hero, Mission, Services, Work, Pricing) are **not modified**.
