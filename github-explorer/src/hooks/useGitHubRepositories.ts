import useSWR from 'swr'
import { githubApi } from '@/services/githubApi'
import { Repository } from '@/types'
import { useGitHubAuth } from './useGitHubAuth'

const fetcher = async (username: string, authToken?: string): Promise<Repository[]> => {
  if (!username) return []
  return await githubApi.getUserRepositories(username, authToken)
}

export function useGitHubRepositories(username: string) {
  const { authToken } = useGitHubAuth()
  
  const { data, error, isLoading, mutate } = useSWR(
    username ? `github-repos-${username}-${authToken ? 'auth' : 'noauth'}` : null,
    () => fetcher(username, authToken),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000,
      errorRetryCount: 3,
      errorRetryInterval: 5000,
    }
  )

  return {
    repositories: data || [],
    isLoading,
    error: error?.message || null,
    refetch: mutate,
  }
}