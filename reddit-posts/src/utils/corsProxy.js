// Utility functions for handling CORS proxies

// List of working CORS proxies (updated regularly)
export const CORS_PROXIES = [
  {
    name: 'AllOrigins',
    url: 'https://api.allorigins.win/get?url=',
    parser: (data) => JSON.parse(data.contents),
    active: true
  },
  {
    name: 'CorsProxy.io',
    url: 'https://corsproxy.io/?',
    parser: (data) => data,
    active: true
  },
  {
    name: 'Cors.sh',
    url: 'https://cors.sh/',
    parser: (data) => data,
    active: true
  },
  {
    name: 'Proxy.cors.sh',
    url: 'https://proxy.cors.sh/',
    parser: (data) => data,
    active: true
  },
  {
    name: 'ThingProxy',
    url: 'https://thingproxy.freeboard.io/fetch/',
    parser: (data) => data,
    active: true
  },
  {
    name: 'JSONProxy',
    url: 'https://jsonp.afeld.me/?url=',
    parser: (data) => data,
    active: true
  }
];

// Test if a CORS proxy is working
export async function testCorsProxy(proxy, targetUrl) {
  try {
    const proxyUrl = proxy.url + encodeURIComponent(targetUrl);
    
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'ReactJS-Reddit-Viewer/1.0.0'
      },
      signal: AbortSignal.timeout(8000) // 8 second timeout
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    const parsed = proxy.parser(data);
    
    // Validate Reddit data structure
    if (parsed?.data?.children && Array.isArray(parsed.data.children)) {
      return { success: true, data: parsed, proxy: proxy.name };
    } else {
      throw new Error('Invalid data structure');
    }
    
  } catch (error) {
    return { success: false, error: error.message, proxy: proxy.name };
  }
}

// Find the first working CORS proxy
export async function findWorkingProxy(targetUrl) {
  const activeProxies = CORS_PROXIES.filter(p => p.active);
  
  for (const proxy of activeProxies) {
    console.log(`🔄 Testing ${proxy.name}...`);
    
    const result = await testCorsProxy(proxy, targetUrl);
    
    if (result.success) {
      console.log(`✅ Found working proxy: ${proxy.name}`);
      return result;
    } else {
      console.warn(`❌ ${proxy.name} failed: ${result.error}`);
    }
  }
  
  throw new Error('No working CORS proxy found');
}

// Fallback fetch with automatic proxy detection
export async function corsAwareFetch(url) {
  // First try direct fetch (in case CORS is not an issue)
  try {
    console.log('🔄 Trying direct fetch...');
    const response = await fetch(url, {
      signal: AbortSignal.timeout(5000)
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data?.data?.children) {
        console.log('✅ Direct fetch successful!');
        return data;
      }
    }
  } catch (error) {
    console.log('❌ Direct fetch failed, trying proxies...');
  }
  
  // If direct fetch fails, try proxies
  const result = await findWorkingProxy(url);
  return result.data;
}

// Get the best CORS solution based on environment
export function getBestCorsStrategy() {
  const hostname = window.location.hostname;
  
  // Development
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return {
      type: 'vite-proxy',
      url: '/api/reddit/r/reactjs.json',
      parser: (data) => data
    };
  }
  
  // Netlify
  if (hostname.includes('netlify')) {
    return {
      type: 'netlify-function',
      url: '/.netlify/functions/reddit-proxy',
      parser: (data) => data
    };
  }
  
  // Vercel
  if (hostname.includes('vercel')) {
    return {
      type: 'vercel-function',
      url: '/api/reddit-proxy',
      parser: (data) => data
    };
  }
  
  // Default to proxy strategy
  return {
    type: 'cors-proxy',
    url: 'https://www.reddit.com/r/reactjs.json',
    parser: (data) => data
  };
}