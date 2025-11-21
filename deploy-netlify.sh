#!/bin/bash

# Netlify Deployment Script
# This script creates a new Netlify site and deploys the application

set -e

NETLIFY_TOKEN="nfp_4WVe7jj6shYCiRcTi8AzSfYDxCnEmv6Eb605"
SITE_NAME="appsobeucloud"
CUSTOM_DOMAIN="app.dobeu.cloud"

echo "🚀 Starting Netlify deployment setup..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "📦 Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Login to Netlify
echo "🔐 Logging in to Netlify..."
netlify login --auth "$NETLIFY_TOKEN"

# Initialize and create site
echo "🏗️  Creating Netlify site: $SITE_NAME..."
netlify sites:create --name "$SITE_NAME" --account-slug ""

# Link to the site
echo "🔗 Linking to site..."
netlify link --name "$SITE_NAME"

# Add custom domain
echo "🌐 Adding custom domain: $CUSTOM_DOMAIN..."
netlify domains:add "$CUSTOM_DOMAIN"

# Deploy
echo "📤 Deploying to Netlify..."
netlify deploy --prod

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://$CUSTOM_DOMAIN"
echo "📝 Note: DNS configuration may be required for the custom domain to work."
