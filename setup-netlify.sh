#!/bin/bash

# Netlify Setup Script
# This script creates a new Netlify site and configures it for deployment

set -e

NETLIFY_TOKEN="nfp_4WVe7jj6shYCiRcTi8AzSfYDxCnEmv6Eb605"
SITE_NAME="appsobeucloud"
CUSTOM_DOMAIN="app.dobeu.cloud"

echo "🚀 Setting up Netlify site: $SITE_NAME"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "📦 Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Login with the token
echo "🔐 Authenticating with Netlify..."
export NETLIFY_AUTH_TOKEN="$NETLIFY_TOKEN"

# Create or link the site
echo "🔗 Creating/linking Netlify site..."
export NETLIFY_AUTH_TOKEN="$NETLIFY_TOKEN"

# Try to link first (if site exists)
if netlify link --name "$SITE_NAME" 2>/dev/null; then
    echo "✅ Linked to existing site: $SITE_NAME"
else
    echo "🆕 Creating new site: $SITE_NAME"
    # Create site via API
    SITE_RESPONSE=$(curl -s -X POST "https://api.netlify.com/api/v1/sites" \
        -H "Authorization: Bearer $NETLIFY_TOKEN" \
        -H "Content-Type: application/json" \
        -d "{\"name\":\"$SITE_NAME\"}")
    
    if [ $? -eq 0 ]; then
        echo "✅ Site created successfully"
        netlify link --name "$SITE_NAME"
    else
        echo "⚠️  Could not create site automatically. Please create it via dashboard or check the token."
        echo "   You can still link manually with: netlify link --name $SITE_NAME"
    fi
fi

# Add custom domain (optional - can be done via dashboard)
echo "🌐 To add custom domain: $CUSTOM_DOMAIN"
echo "   Run: netlify domains:add $CUSTOM_DOMAIN"
echo "   Or add it via Netlify Dashboard → Site settings → Domain management"

echo ""
echo "✅ Netlify setup complete!"
echo ""
echo "Next steps:"
echo "1. Configure DNS for $CUSTOM_DOMAIN to point to your Netlify site"
echo "2. Run 'npm run build' to create a production build"
echo "3. Run 'netlify deploy --prod' to deploy to production"
echo ""
echo "Or connect your Git repository in the Netlify dashboard for automatic deployments."
