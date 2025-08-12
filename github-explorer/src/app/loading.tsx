export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded w-96 mx-auto animate-pulse"></div>
        </div>
        
        <div className="mb-8">
          <div className="h-12 bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
        
        <div className="grid gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700 animate-pulse">
              <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
              <div className="flex gap-4">
                <div className="h-4 bg-gray-700 rounded w-16"></div>
                <div className="h-4 bg-gray-700 rounded w-16"></div>
                <div className="h-4 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}