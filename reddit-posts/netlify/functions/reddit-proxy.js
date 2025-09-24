// Enhanced Netlify serverless function to proxy Reddit API and handle CORS
exports.handler = async (event, context) => {
  // Enhanced CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, User-Agent, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Max-Age': '86400', // Cache preflight for 24 hours
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=300', // Cache response for 5 minutes
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        error: 'Method not allowed',
        allowed: ['GET', 'OPTIONS']
      }),
    };
  }

  try {
    console.log('🔄 Fetching Reddit data from serverless function...');
    
    // Fetch data from Reddit API with timeout and better headers
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    const response = await fetch('https://www.reddit.com/r/reactjs.json', {
      method: 'GET',
      headers: {
        'User-Agent': 'ReactJS-Reddit-Viewer/1.0.0 (Netlify Function)',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Reddit API responded with status: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Validate the response structure
    if (!data || !data.data || !data.data.children) {
      throw new Error('Invalid response structure from Reddit API');
    }
    
    console.log(`✅ Successfully fetched ${data.data.children.length} posts`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
    
  } catch (error) {
    console.error('❌ Error in Reddit proxy function:', error);
    
    // Determine error type and provide appropriate response
    let statusCode = 500;
    let errorMessage = 'Failed to fetch data from Reddit API';
    
    if (error.name === 'AbortError') {
      statusCode = 408;
      errorMessage = 'Request timeout - Reddit API took too long to respond';
    } else if (error.message.includes('fetch')) {
      statusCode = 502;
      errorMessage = 'Unable to connect to Reddit API';
    }
    
    return {
      statusCode,
      headers,
      body: JSON.stringify({ 
        error: errorMessage,
        message: error.message,
        timestamp: new Date().toISOString(),
        function: 'reddit-proxy'
      }),
    };
  }
};