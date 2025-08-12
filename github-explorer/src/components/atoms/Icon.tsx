'use client'

import { ReactNode } from 'react'

interface IconProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Icon({ children, size = 'md', className = '' }: IconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  return (
    <span className={`${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  )
}