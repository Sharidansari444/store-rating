import { useState, useEffect } from 'react'
import PostCard from './components/PostCard'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import { corsAwareFetch, getBestCorsStrategy } from './utils/corsProxy'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRedditPosts()
  }, [])

  // Simple fallback method using manual proxy list
  const fetchRedditPostsSimple = async () => {
    const proxies = [
      'https://api.allorigins.win/get?url=',
      'https://corsproxy.io/?',
      'https://cors.sh/',
      'https://proxy.cors.sh/',
      'https://thingproxy.freeboard.io/fetch/'
    ];
    
    const redditUrl = 'https://www.reddit.com/r/reactjs.json';
    
    for (const proxy of proxies) {
      try {
        console.log('🔄 Trying proxy:', proxy);
        const url = proxy + encodeURIComponent(redditUrl);
        const response = await fetch(url);
        
        if (!response.ok) continue;
        
        let data = await response.json();
        
        // Handle AllOrigins format
        if (data.contents) {
          data = JSON.parse(data.contents);
        }
        
        if (data?.data?.children?.length > 0) {
          console.log('✅ Success!');
          return data.data.children;
        }
      } catch (error) {
        console.warn('❌ Proxy failed:', proxy);
        continue;
      }
    }
    
    throw new Error('All proxies failed');
  };

  const fetchRedditPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Strategy 1: Try smart CORS strategy based on environment
      try {
        const strategy = getBestCorsStrategy();
        console.log('🎯 Using strategy:', strategy.type);
        
        if (strategy.type === 'cors-proxy') {
          // Use the utility function for automatic proxy detection
          const data = await corsAwareFetch(strategy.url);
          setPosts(data.data.children);
          return;
        } else {
          // Try platform-specific endpoints
          const response = await fetch(strategy.url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'ReactJS-Reddit-Viewer/1.0.0'
            },
            signal: AbortSignal.timeout(10000)
          });
          
          if (response.ok) {
            const data = await response.json();
            const parsedData = strategy.parser(data);
            
            if (parsedData?.data?.children?.length > 0) {
              setPosts(parsedData.data.children);
              return;
            }
          }
        }
      } catch (strategyError) {
        console.warn('❌ Smart strategy failed:', strategyError.message);
      }
      
      // Strategy 2: Fallback to simple proxy method
      console.log('🔄 Falling back to simple proxy method...');
      const posts = await fetchRedditPostsSimple();
      setPosts(posts);
      
    } catch (err) {
      console.error('❌ All fetch methods failed:', err);
      setError(
        `Unable to load Reddit posts. This could be due to:\n\n` +
        `• Network connectivity issues\n` +
        `• All CORS proxy services being temporarily unavailable\n` +
        `• Reddit API being down\n\n` +
        `Please try refreshing the page in a few minutes.\n\n` +
        `Error: ${err.message}`
      );
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    fetchRedditPosts()
  }

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8" style={{
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12" style={{
          animation: 'fade-in 0.6s ease-in-out'
        }}>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              🚀 ReactJS Reddit Posts
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Latest posts from r/reactjs community
            </p>
            {!loading && !error && (
              <p className="text-gray-500 mt-2">
                Displaying {posts.length} posts
              </p>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Error State */}
        {error && <ErrorMessage message={error} onRetry={handleRetry} />}

        {/* Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <PostCard 
                key={post.data.id} 
                post={post.data} 
                index={index}
              />
            ))}
          </div>
        )}

        {/* No Posts State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Posts Found</h2>
              <p className="text-gray-600">
                No posts were found from the Reddit API.
              </p>
              <button
                onClick={handleRetry}
                className="mt-4 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App