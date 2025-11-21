# Netlify Deployment Checklist for DOBEU App

## ✅ Pre-Deployment Preparation (COMPLETED)

### Build Configuration
- [x] Created `netlify.toml` with proper build settings
- [x] Set build command to `npm run build`
- [x] Set publish directory to `dist`
- [x] Configured Node.js version 20
- [x] Added SPA redirect rules
- [x] Configured security headers
- [x] Set up asset caching

### Project Files
- [x] Updated `vite.config.ts` to output to `dist/` directory
- [x] Added `preview` script to `package.json`
- [x] Created `public/_redirects` file for SPA routing
- [x] Updated `.gitignore` to exclude build artifacts and Netlify cache
- [x] Updated `index.html` with production meta tags and title
- [x] Added `robots.txt` for SEO
- [x] Added `sitemap.xml` for search engines

### Build Verification
- [x] Installed all dependencies (`npm install`)
- [x] Successfully built project (`npm run build`)
- [x] Verified build output in `dist/` directory
- [x] Checked for production security vulnerabilities (0 found)
- [x] Verified bundle size (408K total, gzipped: ~108KB JS)

### Documentation
- [x] Created comprehensive `DEPLOYMENT.md`
- [x] Updated `README.md` with deployment instructions
- [x] Created this deployment checklist

## 📋 Deployment Steps

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Initialize Site (First Time Only)
```bash
netlify init
```

Choose these options:
- **Create & configure a new site**: Yes
- **Team**: Select your team
- **Site name**: `appsobeucloud`
- **Build command**: `npm run build`
- **Directory to deploy**: `dist`

### Step 4: Deploy to Production
```bash
netlify deploy --prod
```

Verify the deployment URL after completion.

## 🌐 Custom Domain Configuration

### Step 5: Configure Custom Domain
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select site `appsobeucloud`
3. Navigate to **Domain management**
4. Click **Add custom domain**
5. Enter: `app.dobeu.cloud`
6. Verify domain ownership if required

### Step 6: Update DNS Records
At your DNS provider (for dobeu.cloud), add:

```
Type: CNAME
Name: app
Value: appsobeucloud.netlify.app
TTL: 3600 (or auto)
```

### Step 7: Enable HTTPS
- Netlify automatically provisions SSL certificate
- Wait 1-5 minutes for certificate activation
- Verify HTTPS works: https://app.dobeu.cloud

## 🧪 Post-Deployment Testing

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] All sections render properly (Hero, Mission, Services, Work, Pricing)
- [ ] Footer links functional
- [ ] Custom cursor displays correctly
- [ ] Brand kit page accessible (/brand route)
- [ ] "Back to Site" button works from brand kit
- [ ] Responsive design on mobile devices
- [ ] Responsive design on tablet devices

### Technical Tests
- [ ] All routes work (test by refreshing on /brand)
- [ ] No console errors
- [ ] Network requests succeed
- [ ] Supabase connection works
- [ ] CSS styles load correctly
- [ ] JavaScript bundles load
- [ ] Images load with fallbacks
- [ ] Page meta tags correct (check view source)

### Performance Tests
- [ ] Page load time < 3 seconds
- [ ] Lighthouse performance score > 90
- [ ] No layout shift (CLS)
- [ ] First contentful paint < 1.5s

### SEO & Security Tests
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Security headers present (check in DevTools > Network)
- [ ] HTTPS certificate valid
- [ ] No mixed content warnings

## 🔧 Troubleshooting

### Build Fails on Netlify
1. Check Node version in build logs
2. Clear build cache: Site settings > Build & deploy > Clear cache
3. Verify package.json has all dependencies
4. Check build logs for specific errors

### Routes Return 404
1. Verify `netlify.toml` is committed to Git
2. Check `_redirects` file in `dist/` after build
3. Ensure redirect rule is `200` not `404`

### Domain Not Working
1. Verify DNS propagation: https://dnschecker.org
2. Wait up to 48 hours for DNS propagation
3. Check DNS records at domain provider
4. Verify domain ownership in Netlify

### Supabase Not Connecting
1. Check browser console for errors
2. Verify Supabase keys in `src/utils/supabase/info.tsx`
3. Check CORS settings in Supabase dashboard
4. Ensure Supabase project is active

## 📊 Project Information

- **Project Name**: appsobeucloud
- **Domain**: https://app.dobeu.cloud
- **Payment Token**: (stored securely - not displayed here)
- **Framework**: React 18.3 + Vite 6.3
- **Node Version**: 20
- **Build Time**: ~1.5 seconds
- **Bundle Size**: 408KB (108KB gzipped)

## 🎉 Success Criteria

Deployment is successful when:
- ✅ Site accessible at https://app.dobeu.cloud
- ✅ SSL certificate active and valid
- ✅ All routes work correctly
- ✅ No console errors
- ✅ All functionality tested and working
- ✅ Performance metrics meet targets
- ✅ SEO tags and files in place

## 📞 Support Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Support](https://www.netlify.com/support/)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

## 🔄 Continuous Deployment

Once connected to Git repository:
- Automatic deployments on push to main branch
- Preview deployments for pull requests
- Deploy contexts for different branches
- Rollback capability in Netlify dashboard

---

**Note**: The payment token mentioned by the user has NOT been included in any configuration files for security reasons. Netlify billing should be configured through the Netlify dashboard directly.
