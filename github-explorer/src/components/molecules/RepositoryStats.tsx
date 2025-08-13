import React from 'react'
import { StarIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { StatCard } from '../atoms'
import { cn } from '@/lib/utils'

interface RepositoryStatsProps {
  stargazersCount: number
  forksCount: number
  openIssuesCount: number
  className?: string
}

export function RepositoryStats({
  stargazersCount,
  forksCount,
  openIssuesCount,
  className
}: RepositoryStatsProps) {
  const ForkIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-6 mb-8', className)}>
      <StatCard
        icon={<StarIcon className="w-8 h-8" />}
        value={stargazersCount}
        label="Estrelas"
        iconColor="text-yellow-400"
      />
      
      <StatCard
        icon={<ForkIcon />}
        value={forksCount}
        label="Forks"
        iconColor="text-green-400"
      />
      
      <StatCard
        icon={<ExclamationTriangleIcon className="w-8 h-8" />}
        value={openIssuesCount}
        label="Issues Abertas"
        iconColor="text-red-400"
      />
    </div>
  )
}

export default RepositoryStats