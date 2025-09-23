# Reddit ReactJS Posts Viewer

A responsive web application that displays posts from r/reactjs subreddit in a beautiful card format.

## Features

✨ **Beautiful Design**
- Modern gradient background
- Animated cards with hover effects
- Color-coded scores
- Responsive layout optimized for 1280x720 resolution

📱 **Responsive Design**
- Works on desktop, tablet, and mobile devices
- Grid layout that adapts to screen size
- Mobile-friendly navigation

🎯 **Data Display**
- **Title**: Post title (clickable to open original post)
- **SelfText_HTML**: Post content with expand/collapse for long posts
- **URL**: Direct link to the original Reddit post
- **Score**: Post score with color coding (green for positive, orange for high scores)

## Quick Start

### Option 1: Using Python Server (Recommended)
```bash
python3 server.py
```
This will start a local server at `http://localhost:8000` and automatically open your browser.

### Option 2: Direct File Access
Simply open `index.html` in your web browser. Note that some browsers may have CORS restrictions when accessing external APIs from local files.

## Technical Details

- **Data Source**: https://www.reddit.com/r/reactjs.json
- **Fields Used**: title, selftext_html, url, score (from children array)
- **Default Resolution**: 1280x720 (fully responsive)
- **Technologies**: HTML5, CSS3, Vanilla JavaScript

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## CORS Considerations

The application fetches data directly from Reddit's JSON API. If you encounter CORS issues:
1. Use the included Python server (`python3 server.py`)
2. Use a browser extension to disable CORS (development only)
3. Deploy to a web server

## Customization

The application uses CSS custom properties and is easy to customize:
- Colors can be modified in the CSS variables
- Card layout can be adjusted in the `.posts-grid` class
- Responsive breakpoints are defined in media queries

## File Structure

```
/workspace/
├── index.html      # Main application file
├── server.py       # Python development server
└── README.md       # This file
```