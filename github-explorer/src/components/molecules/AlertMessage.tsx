'use client'

import { Text } from '../atoms'

interface AlertMessageProps {
  message: string
  type?: 'info' | 'warning' | 'error' | 'success'
  className?: string
}

export default function AlertMessage({ 
  message, 
  type = 'info', 
  className = '' 
}: AlertMessageProps) {
  const typeClasses = {
    info: 'bg-blue-900/30 border-blue-500/30 text-blue-400',
    warning: 'bg-yellow-900/30 border-yellow-500/30 text-yellow-400',
    error: 'bg-red-900/30 border-red-500/30 text-red-400',
    success: 'bg-green-900/30 border-green-500/30 text-green-400'
  }
  
  return (
    <div className={`border rounded-lg px-4 py-2 ${typeClasses[type]} ${className}`}>
      <Text size="sm" className={typeClasses[type].split(' ')[2]}>
        {message}
      </Text>
    </div>
  )
}