#!/bin/bash

echo "🚀 Setting up React Reddit Posts App"
echo "====================================="

# Create project directory
read -p "Enter project name (default: reddit-posts): " PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-reddit-posts}

mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"

echo "📦 Creating package.json..."
cat > package.json << 'EOF'
{
  "name": "reddit-posts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy:netlify": "npm run build && netlify deploy --prod --dir=dist"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.3",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.4.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "vite": "^7.1.7"
  }
}
EOF

echo "🛠️ Creating configuration files..."

# Create basic HTML
mkdir -p public
cat > index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS Reddit Posts</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

# Create Vite config
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/reddit': {
        target: 'https://www.reddit.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/reddit/, ''),
        secure: true,
      }
    }
  }
})
EOF

# Create Tailwind config
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Create PostCSS config
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create Netlify config
cat > netlify.toml << 'EOF'
[build]
  publish = "dist"
  command = "npm run build"

[functions]
  directory = "netlify/functions"

[[redirects]]
  from = "/api/reddit/*"
  to = "/.netlify/functions/reddit-proxy"
  status = 200

[[headers]]
  for = "/.netlify/functions/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Headers = "Content-Type"
    Access-Control-Allow-Methods = "GET, POST, PUT, DELETE, OPTIONS"
EOF

# Create src directory structure
mkdir -p src/components netlify/functions

echo "📁 Project structure created!"
echo ""
echo "📋 Next steps:"
echo "1. cd $PROJECT_NAME"
echo "2. npm install"
echo "3. Copy the React component files from the examples above"
echo "4. npm run dev"
echo ""
echo "🎉 Your React Reddit Posts app will be ready!"