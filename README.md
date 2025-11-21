
# app.dobeu.net-newdesign

This is a code bundle for app.dobeu.net-newdesign. The original project is available at https://www.figma.com/design/17GGzDSqd3o40wuKayyZiy/app.dobeu.net-newdesign.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Building for production

Run `npm run build` to create a production build. The output will be in the `build` directory.

## Netlify Deployment

This project is configured for deployment on Netlify.

### Project Configuration
- **Project Name**: `appsobeucloud`
- **Custom Domain**: `https://app.dobeu.cloud`
- **Build Command**: `npm run build`
- **Publish Directory**: `build`

### Deployment Steps

1. **Install Netlify CLI** (if deploying via CLI):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Create and deploy the site**:
   ```bash
   netlify init
   ```
   Or link to an existing site:
   ```bash
   netlify link --name appsobeucloud
   ```

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Using Netlify Dashboard

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Add custom domain `app.dobeu.cloud` in Site settings → Domain management

### Configuration Files

- `netlify.toml` - Contains build configuration, redirects, and headers
- `public/_redirects` - SPA routing fallback for client-side routing

The site is configured with:
- SPA routing support (all routes redirect to index.html)
- Security headers (X-Frame-Options, XSS Protection, etc.)
- Cache optimization for static assets
  