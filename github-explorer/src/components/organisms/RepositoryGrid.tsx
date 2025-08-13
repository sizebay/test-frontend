'use client'

import { Repository } from '@/types'
import { useMemo } from 'react'
import { RepositoryCard, LoadingSkeleton } from '../molecules'
import { Text } from '../atoms'

interface RepositoryGridProps {
  repositories: Repository[]
  isLoading?: boolean
  error?: string | null
  emptyMessage?: string
}

export default function RepositoryGrid({ 
  repositories, 
  isLoading = false, 
  error = null,
  emptyMessage = 'Nenhum repositório encontrado'
}: RepositoryGridProps) {
  const content = useMemo(() => {
    if (error) {
      return (
        <div className="flex flex-col text-center py-12">
          <Text color="error" size="lg" className="mb-4">
            Erro ao carregar repositórios
          </Text>
          <Text color="muted">
            {error}
          </Text>
        </div>
      )
    }

    if (isLoading) {
      return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <LoadingSkeleton variant="card" count={6} />
        </div>
      )
    }

    if (repositories.length === 0) {
      return (
        <div className="text-center py-12">
          <Text color="muted" size="lg">
            {emptyMessage}
          </Text>
        </div>
      )
    }

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repositories.map((repository) => (
          <RepositoryCard 
            key={repository.id} 
            repository={repository} 
          />
        ))}
      </div>
    )
  }, [repositories, isLoading, error, emptyMessage])

  return content
}