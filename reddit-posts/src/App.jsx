import { useState, useEffect } from 'react'
import PostCard from './components/PostCard'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRedditPosts()
  }, [])

  const fetchRedditPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Determine API URL based on environment
      const getApiUrl = () => {
        // In development, use Vite proxy
        if (import.meta.env.DEV) {
          return '/api/reddit/r/reactjs.json'
        }
        
        // In production, try Netlify function first
        if (window.location.hostname.includes('netlify.app') || window.location.hostname.includes('netlify.com')) {
          return '/.netlify/functions/reddit-proxy'
        }
        
        // Fallback to CORS proxy services for other deployments
        const corsProxies = [
          'https://api.allorigins.win/get?url=',
          'https://corsproxy.io/?',
          'https://cors-anywhere.herokuapp.com/'
        ]
        
        const redditUrl = encodeURIComponent('https://www.reddit.com/r/reactjs.json')
        return `${corsProxies[0]}${redditUrl}`
      }
      
      const apiUrl = getApiUrl()
      console.log('Fetching from:', apiUrl)
      
      const response = await fetch(apiUrl)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      let data = await response.json()
      
      // Handle different response formats from CORS proxies
      if (data.contents) {
        // allorigins.win format
        data = JSON.parse(data.contents)
      }
      
      const postsData = data.data?.children || []
      
      if (postsData.length === 0) {
        throw new Error('No posts found in the response')
      }
      
      setPosts(postsData)
    } catch (err) {
      console.error('Error fetching Reddit data:', err)
      setError(`Failed to load posts: ${err.message}. Please try refreshing the page.`)
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