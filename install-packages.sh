#!/bin/bash

echo "🚀 Installing Reddit Posts App Packages"
echo "======================================="

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

echo "📦 Installing production dependencies..."
npm install react@^19.1.1 react-dom@^19.1.1

echo "🛠️ Installing development dependencies..."
npm install -D \
  @eslint/js@^9.36.0 \
  @types/react@^19.1.13 \
  @types/react-dom@^19.1.9 \
  @vitejs/plugin-react@^5.0.3 \
  autoprefixer@^10.4.21 \
  eslint@^9.36.0 \
  eslint-plugin-react-hooks@^5.2.0 \
  eslint-plugin-react-refresh@^0.4.20 \
  globals@^16.4.0 \
  postcss@^8.5.6 \
  tailwindcss@^3.4.17 \
  vite@^7.1.7

echo ""
echo "✅ All packages installed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Copy the React source files"
echo "2. Copy configuration files (vite.config.js, tailwind.config.js, etc.)"
echo "3. Run: npm run dev"
echo ""
echo "🎉 Your Reddit Posts app will be ready!"