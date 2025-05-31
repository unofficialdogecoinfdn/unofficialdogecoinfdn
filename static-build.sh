#!/bin/bash

# Build script for static GitHub Pages deployment
echo "Building static site for GitHub Pages..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  npm install
fi

# Build the client-side application using custom config
npx vite build --config vite.static.config.ts

echo "Build complete! Your static site is ready in the 'docs' folder."
echo "To deploy to GitHub Pages:"
echo "1. Push this repository to GitHub"
echo "2. Go to Settings > Pages in your GitHub repository"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/docs' folder"
echo "5. Save and your site will be live!"