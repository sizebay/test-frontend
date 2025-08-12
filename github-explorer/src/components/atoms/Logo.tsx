'use client'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  }
  
  const iconTextClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }
  
  return (
    <div className="flex items-center space-x-3">
      <div className={`${sizeClasses[size]} bg-blue-600 rounded-lg flex items-center justify-center`}>
        <span className={`text-white font-bold ${iconTextClasses[size]}`}>GH</span>
      </div>
      {showText && (
        <h1 className={`${textSizeClasses[size]} font-bold text-white`}>
          GitHub Explorer
        </h1>
      )}
    </div>
  )
}