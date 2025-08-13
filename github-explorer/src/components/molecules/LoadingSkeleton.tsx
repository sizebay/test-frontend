'use client'

interface LoadingSkeletonProps {
  variant?: 'card' | 'text' | 'avatar' | 'button'
  count?: number
  className?: string
}

export default function LoadingSkeleton({ 
  variant = 'card', 
  count = 1, 
  className = '' 
}: LoadingSkeletonProps) {
  const skeletonClasses = {
    card: 'border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800',
    text: 'h-4 bg-gray-700 rounded',
    avatar: 'w-8 h-8 bg-gray-700 rounded-full',
    button: 'h-10 bg-gray-700 rounded-lg w-24'
  }
  
  const items = Array.from({ length: count }, (_, index) => (
    <div 
      key={index} 
      className={`animate-pulse ${skeletonClasses[variant]} ${className}`}
    >
      {variant === 'card' && (
        <div className="p-6 space-y-3">
          {/* Título do repositório */}
          <div className="h-6 bg-gray-700 dark:bg-gray-600 rounded w-3/4"></div>
          
          {/* Descrição */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 dark:bg-gray-600 rounded w-full"></div>
            <div className="h-4 bg-gray-700 dark:bg-gray-600 rounded w-2/3"></div>
          </div>
          
          {/* Estatísticas (linguagem, stars, forks) */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-700 dark:bg-gray-600 rounded-full"></div>
              <div className="h-3 bg-gray-700 dark:bg-gray-600 rounded w-12"></div>
            </div>
            <div className="h-3 bg-gray-700 dark:bg-gray-600 rounded w-8"></div>
            <div className="h-3 bg-gray-700 dark:bg-gray-600 rounded w-8"></div>
          </div>
        </div>
      )}
    </div>
  ))
  
  return (
    <>
      {items}
    </>
  )
}