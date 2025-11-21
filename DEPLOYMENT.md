# Netlify Deployment Guide for DOBEU App

## Project Configuration

- **Project Name**: appsobeucloud
- **Domain**: https://app.dobeu.cloud
- **Build Output Directory**: `dist/`
- **Build Command**: `npm run build`

## Deployment Instructions

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize the site**:
   ```bash
   netlify init
   ```
   
   When prompted:
   - Create & configure a new site
   - Team: Select your team
   - Site name: `appsobeucloud`
   - Build command: `npm run build`
   - Directory to deploy: `dist`

4. **Deploy to production**:
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify Dashboard

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect to your Git repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 20
5. Click "Deploy site"

### Option 3: Manual Deploy via Netlify CLI

If you want to do a one-time manual deployment:

```bash
# Build the project
npm run build

# Deploy (without creating the site first)
netlify deploy --prod --dir=dist
```

## Custom Domain Setup

After deployment, configure your custom domain:

1. Go to your site in Netlify Dashboard
2. Navigate to "Domain management"
3. Click "Add custom domain"
4. Enter: `app.dobeu.cloud`
5. Follow DNS configuration instructions

### DNS Configuration Required

Add these DNS records at your domain provider:

```
Type: CNAME
Name: app
Value: [your-site-name].netlify.app
```

Or for apex domain:
```
Type: A
Name: @
Value: 75.2.60.5
```

## Environment Variables (if needed in the future)

If you need to add environment variables:

1. In Netlify Dashboard, go to Site settings > Environment variables
2. Add variables with `VITE_` prefix for frontend access
3. Redeploy the site

## Post-Deployment Checklist

- ✅ Site builds successfully
- ✅ All routes work correctly (SPA routing configured)
- ✅ Custom domain configured
- ✅ SSL certificate active (automatic via Netlify)
- ✅ Test all pages and functionality
- ✅ Verify Supabase connection works

## Build Verification

The project has been tested and builds successfully:
- Build output: `dist/` directory
- Main files: `index.html`, CSS, and JS bundles
- Build time: ~1.5s
- Bundle size: ~346 KB (gzipped: ~108 KB)

## Configuration Files

The following files have been configured for Netlify:

1. **netlify.toml** - Main Netlify configuration
   - Build settings
   - Redirect rules for SPA
   - Security headers
   - Asset caching

2. **public/_redirects** - SPA routing fallback
   - Ensures all routes serve index.html

3. **.gitignore** - Excludes build artifacts
   - `dist/` and `build/` directories
   - `.netlify/` cache directory

## Troubleshooting

### Build Fails
- Ensure Node.js version 20 is used
- Check that all dependencies are in package.json
- Review build logs in Netlify Dashboard

### Routes Don't Work
- Verify `netlify.toml` is in the root directory
- Check that `_redirects` file is in `public/` directory
- Ensure redirects are configured for 200 status (not 404)

### Supabase Connection Issues
- Verify Supabase credentials in `src/utils/supabase/info.tsx`
- Check network tab for API errors
- Ensure CORS is configured in Supabase project

## Continuous Deployment

Once connected to Git:
- Push to main branch triggers automatic deployment
- Pull requests create preview deployments
- Rollback available in Netlify Dashboard

## Support

For issues:
- Check Netlify build logs
- Review console errors in browser
- Verify all configuration files are committed to Git
