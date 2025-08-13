import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Text } from '../atoms'
import { cn } from '@/lib/utils'

interface RepositoryHeaderProps {
  repositoryName: string
  ownerLogin: string
  username: string
  githubUrl: string
  className?: string
}

export function RepositoryHeader({
  repositoryName,
  ownerLogin,
  username,
  githubUrl,
  className
}: RepositoryHeaderProps) {
  return (
    <div className={cn('mb-8', className)}>
      <Link 
        href={`/?user=${encodeURIComponent(username)}`}
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Voltar para busca
      </Link>
      
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <Text variant="heading" size="xl" className="text-white mb-2">
            {repositoryName}{' '}
          </Text>
          <Text className="text-gray-400">
            por <span className="text-blue-400">{ownerLogin}</span>
          </Text>
        </div>
        
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 px-4 py-2 text-sm space-x-2"
        >
          Ver no GitHub
        </a>
      </div>
    </div>
  )
}

export default RepositoryHeader