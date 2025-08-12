import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Text, Button } from '../atoms'
import { LoadingSkeleton, RepositoryHeader, RepositoryStats, RepositoryInfo } from '../molecules'
import { cn } from '@/lib/utils'
import { RepositoryDetails } from '@/types'

interface RepositoryDetailsTemplateProps {
  repository?: RepositoryDetails | null
  isLoading: boolean
  error?: string | null
  username: string
  onRetry?: () => void
  className?: string
}

export function RepositoryDetailsTemplate({
  repository,
  isLoading,
  error,
  username,
  onRetry,
  className
}: RepositoryDetailsTemplateProps) {
  if (isLoading) {
    return (
      <div className={cn('min-h-screen bg-gray-900 text-white p-6', className)}>
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6">
            {/* Header skeleton */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/4"></div>
            </div>
            
            {/* Description skeleton */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="h-6 bg-gray-700 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </div>
            
            {/* Stats skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="h-8 bg-gray-700 rounded w-16 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-20"></div>
                </div>
              ))}
            </div>
            
            {/* Info skeleton */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 bg-gray-700 rounded w-20"></div>
                    <div className="h-4 bg-gray-700 rounded w-24"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={cn('min-h-screen bg-gray-900 text-white p-6', className)}>
        <div className="max-w-4xl mx-auto">
          <Link 
            href={`/?user=${encodeURIComponent(username)}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Voltar para busca
          </Link>
          
          <div className="text-center py-12">
            <ExclamationTriangleIcon className="w-16 h-16 mx-auto mb-4 text-red-400" />
            <Text variant="heading" size="xl" className="text-red-400 mb-4">
              Erro ao carregar repositório
            </Text>
            <Text className="text-gray-400 mb-6">{error}</Text>
            {onRetry && (
              <Button
                onClick={onRetry}
                variant="secondary"
                className="bg-red-600 hover:bg-red-700"
              >
                Tentar novamente
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (!repository) {
    return (
      <div className={cn('min-h-screen bg-gray-900 text-white p-6', className)}>
        <div className="max-w-4xl mx-auto">
          <Link 
            href={`/?user=${encodeURIComponent(username)}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Voltar para busca
          </Link>
          
          <div className="text-center py-12">
            <Text variant="heading" size="xl" className="text-gray-400 mb-4">
              Repositório não encontrado
            </Text>
            <Text className="text-gray-500">
              O repositório {username} não foi encontrado.
            </Text>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('min-h-screen bg-gray-900 text-white p-6', className)}>
      <div className="max-w-4xl mx-auto">
        <RepositoryHeader
          repositoryName={repository.name}
          ownerLogin={repository.owner.login}
          username={username}
          githubUrl={repository.html_url}
        />

        {repository.description && (
          <div className="mb-8">
            <Text size="lg" className="text-gray-300 leading-relaxed">
              {repository.description}
            </Text>
          </div>
        )}

        <RepositoryStats
          stargazersCount={repository.stargazers_count}
          forksCount={repository.forks_count}
          openIssuesCount={repository.open_issues_count}
        />

        <RepositoryInfo
          language={repository.language}
          createdAt={repository.created_at}
          updatedAt={repository.updated_at}
          license={repository.license}
          size={repository.size}
          defaultBranch={repository.default_branch}
          isPrivate={repository.private}
          topics={repository.topics}
        />
      </div>
    </div>
  )
}

export default RepositoryDetailsTemplate