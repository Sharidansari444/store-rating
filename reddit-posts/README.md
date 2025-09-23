# Reddit ReactJS Posts Viewer

A modern, responsive React application that displays posts from r/reactjs subreddit in a beautiful card format using Tailwind CSS.

## 🚀 Features

### ✨ **Beautiful Design**
- Modern gradient backgrounds with Tailwind CSS
- Animated cards with smooth hover effects
- Color-coded scores (green for positive, orange for high scores)
- Responsive grid layout optimized for 1280x720 resolution
- Glass-morphism effects with backdrop blur

### 📱 **Responsive Design**
- Desktop: Multi-column grid layout
- Tablet: Adaptive 2-column layout
- Mobile: Single column with touch-friendly interface
- Optimized for all screen sizes

### 🎯 **Data Display**
- **Title**: Post title (clickable to open original Reddit post)
- **SelfText_HTML**: Post content with expand/collapse functionality for long posts
- **URL**: Direct link buttons to original Reddit posts
- **Score**: Post score with color-coded styling and proper formatting

### 🔧 **Technical Features**
- React 18+ with modern hooks
- Vite for fast development and building
- Tailwind CSS for utility-first styling
- CORS proxy for development
- Error handling with retry functionality
- Loading states with beautiful spinners
- HTML entity decoding for post content

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   This will start the app at `http://localhost:5173` with hot reload.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🌐 API & CORS Handling

- **Data Source**: `https://www.reddit.com/r/reactjs.json`
- **Development**: Uses Vite proxy to handle CORS issues
- **Production**: Direct API calls (may require CORS proxy service)

### CORS Solutions for Production:
1. Deploy to a web server with CORS headers
2. Use a CORS proxy service like `cors-anywhere`
3. Implement a backend proxy

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Single column layout
- **Tablet**: `640px - 1024px` - Two column layout
- **Desktop**: `1024px - 1280px` - Three column layout
- **Large Desktop**: `> 1280px` - Optimized three column layout

## 🎨 Styling & Customization

The app uses Tailwind CSS with custom components:

```css
/* Custom gradients and effects */
.gradient-text - Blue to purple gradient text
.card-hover - Smooth hover animations
.score-positive - Green gradient for positive scores
.score-high - Orange to red gradient for high scores
```

### Color Scheme:
- **Primary**: Blue (#3B82F6) to Purple (#8B5CF6)
- **Secondary**: Pink (#EC4899) accents
- **Success**: Green (#10B981) for positive scores
- **Warning**: Orange (#F59E0B) to Red (#EF4444) for high scores

## 🏗️ Project Structure

```
reddit-posts/
├── src/
│   ├── components/
│   │   ├── PostCard.jsx      # Individual post card component
│   │   ├── LoadingSpinner.jsx # Loading state component
│   │   └── ErrorMessage.jsx   # Error handling component
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind CSS imports and custom styles
├── public/                   # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration with CORS proxy
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 🧪 Component Architecture

### `App.jsx`
- Main application state management
- API fetching logic
- Error handling and retry functionality
- Responsive layout container

### `PostCard.jsx`
- Individual post rendering
- Content expansion/collapse
- Score formatting and styling
- Click handlers for external links

### `LoadingSpinner.jsx`
- Beautiful loading animations
- Progress indicators
- User feedback during API calls

### `ErrorMessage.jsx`
- Error state display
- Retry functionality
- CORS troubleshooting tips

## 🔍 Browser Compatibility

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📊 Performance Features

- **Lazy Loading**: Staggered card animations
- **Optimized Rendering**: React 18 concurrent features
- **Fast Builds**: Vite for lightning-fast development
- **Tree Shaking**: Optimized bundle sizes
- **CSS Purging**: Tailwind removes unused styles

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm run build
# Deploy dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness at different screen sizes
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning and development!

---

**Made with ⚛️ React, 🎨 Tailwind CSS, and ❤️**