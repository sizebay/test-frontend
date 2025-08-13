'use client'

import { ReactNode, useMemo } from 'react'

interface TextProps {
  children: ReactNode
  variant?: 'body' | 'caption' | 'label' | 'heading'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'warning' | 'error'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  className?: string
  style?: React.CSSProperties
}

export default function Text({
  children,
  variant = 'body',
  size = 'md',
  color = 'primary',
  weight = 'normal',
  className = '',
  style
}: TextProps) {
  const classes = useMemo(() => {
    const variantClasses = {
      body: '',
      caption: 'text-xs',
      label: 'text-sm',
      heading: 'font-semibold'
    }
    
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    }
    
    const colorClasses = {
      primary: 'text-white',
      secondary: 'text-gray-300',
      muted: 'text-gray-400',
      accent: 'text-blue-400',
      warning: 'text-yellow-400',
      error: 'text-red-400'
    }
    
    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }
    
    return `${variantClasses[variant]} ${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`
  }, [variant, size, color, weight, className])
  
  return (
    <span className={classes} style={style}>
      {children}
    </span>
  )
}