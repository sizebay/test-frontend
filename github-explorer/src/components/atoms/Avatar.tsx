'use client'

import Image from 'next/image'
import { UserIcon } from '@heroicons/react/24/outline'

interface AvatarProps {
  src?: string | null
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  fallbackIcon?: boolean
}

export default function Avatar({ 
  src, 
  alt = 'User avatar', 
  size = 'md',
  fallbackIcon = true 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  
  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }
  
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
        height={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
        className={`${sizeClasses[size]} rounded-full object-cover`}
      />
    )
  }
  
  if (fallbackIcon) {
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gray-700 flex items-center justify-center`}>
        <UserIcon className={`${iconSizeClasses[size]} text-gray-400`} />
      </div>
    )
  }
  
  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gray-700`}></div>
  )
}