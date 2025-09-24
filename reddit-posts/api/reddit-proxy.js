// Vercel serverless function for Reddit API proxy
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, User-Agent');
  res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🔄 Fetching Reddit data from Vercel function...');
    
    const response = await fetch('https://www.reddit.com/r/reactjs.json', {
      headers: {
        'User-Agent': 'ReactJS-Reddit-Viewer/1.0.0 (Vercel Function)',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Reddit API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data?.data?.children) {
      throw new Error('Invalid response structure');
    }

    console.log(`✅ Successfully fetched ${data.data.children.length} posts`);
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('❌ Error in Vercel function:', error);
    return res.status(500).json({
      error: 'Failed to fetch Reddit data',
      message: error.message,
      timestamp: new Date().toISOString(),
    });
  }
}