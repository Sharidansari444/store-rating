const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" style={{
      animation: 'bounce-in 0.8s ease-out'
    }}>
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center">
        {/* Animated spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
        </div>
        
        {/* Loading text with animated dots */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Loading Posts
        </h2>
        <p className="text-gray-600">
          Fetching the latest ReactJS discussions...
        </p>
        
        {/* Animated dots */}
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner