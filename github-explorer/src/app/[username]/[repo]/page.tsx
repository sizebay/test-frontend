'use client'

import { useParams } from 'next/navigation'
import { useRepositoryDetails } from '@/hooks/useRepositoryDetails'
import { RepositoryDetailsTemplate } from '@/components/templates'

export default function RepositoryDetailsPage() {
  const params = useParams()
  const username = params.username as string
  const repo = params.repo as string

  const { repository, isLoading, error, refetch } = useRepositoryDetails(username, repo)

  return (
    <RepositoryDetailsTemplate
      repository={repository}
      isLoading={isLoading}
      error={error}
      username={username}
      onRetry={refetch}
    />
  )
}