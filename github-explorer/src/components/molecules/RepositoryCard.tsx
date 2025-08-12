'use client'

import Link from 'next/link'
import { Text } from '../atoms'
import { Repository } from '@/types'

interface RepositoryCardProps {
  repository: Repository
  onClick?: () => void
}

export default function RepositoryCard({ repository, onClick }: RepositoryCardProps) {
  const repositoryUrl = `/${repository.owner.login}/${repository.name}`

  if (onClick) {
    return (
      <div
        className="flex flex-col p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
        onClick={onClick}
      >
        <Text 
          variant="heading" 
          size="lg" 
          color="accent" 
          className="mb-2"
        >
          {repository.name}
        </Text>
      
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

  return (
    <Link href={repositoryUrl} className="block">
      <div className="flex flex-col p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow dark:border-gray-700 dark:bg-gray-800 cursor-pointer">
        <Text 
          variant="heading" 
          size="lg" 
          color="accent" 
          className="mb-2 hover:underline"
        >
          {repository.name}
        </Text>
        
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
    </Link>
  )
}