import { useState } from 'react'

const PostCard = ({ post, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { title, selftext_html, url, score } = post

  // Decode HTML entities
  const decodeHtml = (html) => {
    if (!html) return ''
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  // Get score styling class
  const getScoreClass = (score) => {
    if (score > 100) return 'score-high'
    if (score > 0) return 'score-positive'
    return 'score-neutral'
  }

  // Truncate text for preview
  const truncateText = (text, maxLength = 300) => {
    if (!text || text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  const decodedContent = decodeHtml(selftext_html)
  const shouldShowExpandButton = decodedContent && decodedContent.length > 300

  return (
    <div 
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl card-hover border-l-4 border-blue-500 relative overflow-hidden"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'slide-up 0.6s ease-out forwards'
      }}
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)'
      }}></div>
      
      {/* Title */}
      <h2 
        className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight cursor-pointer hover:text-blue-600 transition-colors duration-300"
        onClick={() => window.open(url, '_blank')}
      >
        {title}
      </h2>

      {/* Content */}
      <div className="mb-6">
        {decodedContent ? (
          <div className="text-gray-700 leading-relaxed">
            <div 
              className={`prose prose-sm max-w-none ${!isExpanded ? 'line-clamp-6' : ''}`}
              dangerouslySetInnerHTML={{ 
                __html: isExpanded ? decodedContent : truncateText(decodedContent) 
              }}
            />
            {shouldShowExpandButton && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
              >
                {isExpanded ? '📖 Show less' : '📚 Read more'}
              </button>
            )}
          </div>
        ) : (
          <p className="text-gray-500 italic">No additional content available.</p>
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gray-200">
        {/* Link Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          style={{
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
          }}
        >
          🔗 View Post
        </a>

        {/* Score */}
        <div className={`inline-flex items-center gap-2 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg ${getScoreClass(score)}`}>
          <span className="text-lg">⬆️</span>
          <span>{score.toLocaleString()} points</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard