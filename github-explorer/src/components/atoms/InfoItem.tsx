import React from 'react'
import { cn } from '@/lib/utils'

interface InfoItemProps {
  icon?: React.ReactNode
  label: string
  value: string | React.ReactNode
  iconColor?: string
  className?: string
}

export const InfoItem: React.FC<InfoItemProps> = ({
  icon,
  label,
  value,
  iconColor = 'text-blue-400',
  className
}) => {
  return (
    <div className={cn('flex items-center', className)}>
      {icon && (
        <div className={cn('w-5 h-5 mr-3', iconColor)}>
          {icon}
        </div>
      )}
      <span className="text-gray-300">{label}:</span>
      <span className="ml-2 text-white font-medium">{value}</span>
    </div>
  )
}

export default InfoItem