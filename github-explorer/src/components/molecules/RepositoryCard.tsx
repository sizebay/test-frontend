'use client'

import Link from 'next/link'
import { Text } from '../atoms'
import { Repository } from '@/types'
import { useMemo } from 'react'

interface RepositoryCardProps {
  repository: Repository
  onClick?: () => void
}

export default function RepositoryCard({ repository, onClick }: RepositoryCardProps) {
  const repositoryUrl = useMemo(() => {
    return `/${repository.owner.login}/${repository.name}`
  }, [repository.owner.login, repository.name])

  const stats = useMemo(() => {
    return {
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      language: repository.language
    }
  }, [repository.stargazers_count, repository.forks_count, repository.language])

  if (onClick) {
    return (
      <div
        className="flex flex-col p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow dark:border-gray-700 dark:bg-gray-800 cursor-pointer h-48"
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
          className="mb-3 flex-1 overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis'
          }}
        >
          {repository.description}
        </Text>
      )}
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          {stats.language && (
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <Text color="muted" size="sm">
                {stats.language}
              </Text>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <Text color="muted" size="sm">
              ⭐ {stats.stars}
            </Text>
          </div>
          
          <div className="flex items-center gap-1">
            <Text color="muted" size="sm">
              🍴 {stats.forks}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

  return (
    <Link href={repositoryUrl} className="block">
      <div className="flex flex-col p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow dark:border-gray-700 dark:bg-gray-800 cursor-pointer h-48">
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
            className="mb-3 flex-1 overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis'
            }}
          >
            {repository.description}
          </Text>
        )}
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            {stats.language && (
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <Text color="muted" size="sm">
                  {stats.language}
                </Text>
              </div>
            )}
            
            <div className="flex items-center gap-1">
              <Text color="muted" size="sm">
                ⭐ {stats.stars}
              </Text>
            </div>
            
            <div className="flex items-center gap-1">
              <Text color="muted" size="sm">
                🍴 {stats.forks}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}