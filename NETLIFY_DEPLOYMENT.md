# Netlify Deployment Guide

This project is configured and ready for deployment to Netlify.

## Configuration Summary

- **Project Name**: `appsobeucloud`
- **Custom Domain**: `https://app.dobeu.cloud`
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node Version**: 20

## Files Created/Modified

1. **`netlify.toml`** - Main Netlify configuration file
   - Build settings
   - SPA routing redirects
   - Security headers

2. **`public/_redirects`** - Fallback redirect file for SPA routing
   - Ensures all routes redirect to `index.html` for client-side routing

3. **`deploy-netlify.sh`** - Deployment script (optional)
   - Automated deployment script using Netlify CLI

## Deployment Options

### Option 1: Deploy via Netlify CLI (Recommended)

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login using the provided token
netlify login --auth nfp_4WVe7jj6shYCiRcTi8AzSfYDxCnEmv6Eb605

# Create the site
netlify sites:create --name appsobeucloud

# Link to the site
netlify link --name appsobeucloud

# Add custom domain
netlify domains:add app.dobeu.cloud

# Deploy to production
netlify deploy --prod
```

Or simply run the deployment script:
```bash
./deploy-netlify.sh
```

### Option 2: Deploy via Netlify Dashboard

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository (GitHub, GitLab, or Bitbucket)
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"
6. After deployment, go to Site settings → Domain management
7. Add custom domain: `app.dobeu.cloud`
8. Configure DNS as instructed by Netlify

### Option 3: Deploy via Git Integration (Recommended for CI/CD)

1. Connect your Git repository to Netlify
2. Netlify will automatically detect the `netlify.toml` configuration
3. Every push to your main branch will trigger a deployment
4. Add the custom domain in the Netlify dashboard

## DNS Configuration

After adding the custom domain `app.dobeu.cloud` in Netlify:

1. Netlify will provide DNS records to add
2. Add these records to your DNS provider (where `dobeu.cloud` is managed)
3. Common records needed:
   - A record pointing to Netlify's IP
   - CNAME record pointing to your Netlify site
   - Or use Netlify's nameservers

## Environment Variables

Currently, no environment variables are required. If you need to add any in the future:

1. Go to Netlify Dashboard → Site settings → Environment variables
2. Add variables as needed
3. They will be available during build time as `import.meta.env.VITE_*`

## SPA Routing

The application uses client-side routing with routes:
- `/` - Home page
- `/brand` - Brand kit page

Both `netlify.toml` and `public/_redirects` are configured to handle SPA routing correctly.

## Security Headers

The following security headers are configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## Troubleshooting

### Build Fails
- Ensure Node.js 20 is available (configured in `netlify.toml`)
- Check that all dependencies are listed in `package.json`
- Review build logs in Netlify dashboard

### Routing Issues
- Verify `netlify.toml` redirects are in place
- Check that `public/_redirects` file exists
- Ensure the redirect rule uses status 200 (not 301/302)

### Custom Domain Not Working
- Verify DNS records are correctly configured
- Check SSL certificate status in Netlify dashboard
- Allow time for DNS propagation (can take up to 48 hours)

## Next Steps

1. Deploy the site using one of the methods above
2. Configure DNS for the custom domain
3. Verify the site is accessible at `https://app.dobeu.cloud`
4. Set up continuous deployment if using Git integration
