'use client'

import Link from 'next/link'
import { Text } from '../atoms'
import { Repository } from '@/types'

interface RepositoryCardProps {
  repository: Repository
  onClick?: () => void
}

export default function RepositoryCard({ repository, onClick }: RepositoryCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      window.location.href = `/${repository.owner.login}/${repository.name}`
    }
  }

  return (
    <div
      className=" flex flex-col p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
      onClick={handleClick}
    >
      <Link href={`/${repository.owner.login}/${repository.name}`}>
        <Text 
          variant="heading" 
          size="lg" 
          color="accent" 
          className="mb-2 hover:underline"
        >
          {repository.name}
        </Text>
      </Link>
      
      {repository.description && (
        <Text 
          color="secondary" 
          size="sm" 
          className="mb-3"
        >
          {repository.description}
        </Text>
      )}
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          {repository.language && (
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <Text color="muted" size="sm">
                {repository.language}
              </Text>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <Text color="muted" size="sm">
              ⭐ {repository.stargazers_count}
            </Text>
          </div>
          
          <div className="flex items-center gap-1">
            <Text color="muted" size="sm">
              🍴 {repository.forks_count}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}