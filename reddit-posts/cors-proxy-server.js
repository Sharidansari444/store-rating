// Custom CORS proxy server (Node.js/Express)
// Deploy this to Heroku, Railway, or any Node.js hosting service

const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'User-Agent'],
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'CORS Proxy Server is running',
    timestamp: new Date().toISOString()
  });
});

// Reddit API proxy endpoint
app.get('/reddit/:subreddit', async (req, res) => {
  try {
    const { subreddit } = req.params;
    const redditUrl = `https://www.reddit.com/r/${subreddit}.json`;
    
    console.log(`🔄 Proxying request to: ${redditUrl}`);
    
    const response = await fetch(redditUrl, {
      headers: {
        'User-Agent': 'ReactJS-Reddit-Viewer-Proxy/1.0.0',
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Reddit API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Set caching headers
    res.set({
      'Cache-Control': 'public, max-age=300', // 5 minutes
      'Content-Type': 'application/json',
    });
    
    console.log(`✅ Successfully proxied ${data.data?.children?.length || 0} posts`);
    res.json(data);
    
  } catch (error) {
    console.error('❌ Proxy error:', error);
    res.status(500).json({
      error: 'Failed to fetch from Reddit API',
      message: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// Generic proxy endpoint
app.use('/proxy', createProxyMiddleware({
  target: 'https://www.reddit.com',
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '', // remove /proxy from path
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('User-Agent', 'ReactJS-Reddit-Viewer-Proxy/1.0.0');
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).json({
      error: 'Proxy error',
      message: err.message,
    });
  },
}));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 CORS Proxy Server running on port ${PORT}`);
  console.log(`📡 Endpoints:`);
  console.log(`   Health: http://localhost:${PORT}/health`);
  console.log(`   Reddit: http://localhost:${PORT}/reddit/reactjs`);
  console.log(`   Proxy:  http://localhost:${PORT}/proxy/r/reactjs.json`);
});

module.exports = app;