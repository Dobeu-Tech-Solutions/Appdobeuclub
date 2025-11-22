# AppDobeuClub API

Express.js REST API for app.dobeu.net with MongoDB backend integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your MongoDB URI and other credentials
nano .env

# Run in development mode
npm run dev

# Build for production
npm run build

# Run in production
npm start
```

The server will start on `http://localhost:4000` by default.

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register or update user
- `GET /api/auth/user/:supabaseId` - Get user by Supabase ID

### Quotes
- `POST /api/quotes/request` - Submit quote request

### Analytics
- `POST /api/analytics/track` - Track analytics event
- `GET /api/analytics` - Get analytics data (with filters)

### Contact
- `POST /api/contact/submit` - Submit contact form

### Portfolio
- `GET /api/portfolio` - List portfolio items
- `GET /api/portfolio/:slug` - Get portfolio item by slug

### Admin
- `GET /api/admin/invoices` - List invoices (admin only)
- `GET /api/admin/revenue-stats` - Get revenue statistics
- `GET /api/admin/clients` - List clients

### System
- `GET /health` - Health check endpoint

## 🔐 Environment Variables

Required environment variables:

```env
MONGODB_URI=mongodb+srv://...
PORT=4000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000,https://app.dobeu.net
```

See `.env.example` for full list.

## 📦 Deployment Options

### Option 1: Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Create new project
railway init

# Add environment variables
railway variables set MONGODB_URI="your_mongodb_uri"

# Deploy
railway up
```

### Option 2: Render

1. Create new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Add environment variables in dashboard
6. Deploy!

### Option 3: Fly.io

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Login
fly auth login

# Launch app
fly launch

# Set secrets
fly secrets set MONGODB_URI="your_mongodb_uri"

# Deploy
fly deploy
```

### Option 4: Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create appdobeuclub-api

# Set environment variables
heroku config:set MONGODB_URI="your_mongodb_uri"

# Deploy
git push heroku main
```

## 🔧 Development

```bash
# Run in watch mode
npm run watch

# In another terminal
npm run dev
```

## 📊 Tech Stack

- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Morgan

## 🛡️ Security Features

- Rate limiting (100 requests per 15 minutes)
- CORS protection
- Helmet security headers
- Input validation
- Error handling

## 📝 License

MIT
