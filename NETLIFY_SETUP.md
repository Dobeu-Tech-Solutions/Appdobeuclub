# Netlify Deployment Setup

This document outlines the Netlify deployment configuration for this project.

## Project Details

- **Project Name**: `appsobeucloud`
- **Custom Domain**: `https://app.dobeu.cloud`
- **Netlify API Token**: `nfp_4WVe7jj6shYCiRcTi8AzSfYDxCnEmv6Eb605`

## Configuration Files Created

1. **`netlify.toml`** - Main Netlify configuration file containing:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node.js version: 20
   - SPA routing redirects (all routes → index.html)
   - Security headers (X-Frame-Options, XSS Protection, etc.)
   - Cache optimization for static assets

2. **`public/_redirects`** - Fallback redirect file for SPA routing
   - Automatically copied to build output by Vite
   - Ensures all routes work with client-side routing

3. **`setup-netlify.sh`** - Automated setup script
   - Creates/links the Netlify site
   - Configures the custom domain
   - Uses the provided API token

## Quick Start

### Option 1: Using the Setup Script

```bash
./setup-netlify.sh
```

### Option 2: Manual Setup via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login with token
export NETLIFY_AUTH_TOKEN="nfp_4WVe7jj6shYCiRcTi8AzSfYDxCnEmv6Eb605"

# Create site
netlify sites:create --name appsobeucloud

# Link to local project
netlify link --name appsobeucloud

# Add custom domain
netlify domains:add app.dobeu.cloud

# Deploy
npm run build
netlify deploy --prod
```

### Option 3: Via Netlify Dashboard

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `build`
5. In Site settings → Domain management, add `app.dobeu.cloud`
6. Configure DNS records as instructed by Netlify

## DNS Configuration

After adding the custom domain in Netlify, you'll need to configure DNS:

1. Add a CNAME record pointing `app.dobeu.cloud` to your Netlify site
2. Or add an A record pointing to Netlify's IP addresses (provided in dashboard)

## Build Verification

The build has been tested and verified:
- ✅ Dependencies install correctly
- ✅ Build completes successfully
- ✅ `_redirects` file is included in build output
- ✅ All static assets are properly bundled

## Features Configured

- ✅ Single Page Application (SPA) routing support
- ✅ Security headers for XSS and clickjacking protection
- ✅ Cache optimization for static assets (1 year cache)
- ✅ Production build optimization
- ✅ Custom domain configuration ready

## Next Steps

1. Run the setup script or manually create the Netlify site
2. Configure DNS for the custom domain
3. Deploy the site (automatic if Git is connected, or manual via CLI)
4. Verify the site is accessible at https://app.dobeu.cloud
