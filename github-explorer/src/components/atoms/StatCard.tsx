import React from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: React.ReactNode
  value: string | number
  label: string
  iconColor?: string
  className?: string
}

export function StatCard({
  icon,
  value,
  label,
  iconColor = 'text-blue-400',
  className
}: StatCardProps) {
  return (
    <div className={cn(
      'bg-gray-800 rounded-lg p-6 text-center',
      className
    )}>
      <div className={cn('w-8 h-8 mx-auto mb-2', iconColor)}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-white">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}

export default StatCard