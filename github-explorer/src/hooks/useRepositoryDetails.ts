import useSWR from 'swr'
import { githubApi } from '@/services/githubApi'
import { RepositoryDetails } from '@/types'
import { useGitHubAuth } from './useGitHubAuth'

const fetcher = async (username: string, repo: string, authToken?: string): Promise<RepositoryDetails> => {
  if (!username || !repo) throw new Error('Username e repositório são obrigatórios')
  return await githubApi.getRepositoryDetails(username, repo, authToken)
}

export function useRepositoryDetails(username: string, repo: string) {
  const { authToken } = useGitHubAuth()
  
  const { data, error, isLoading, mutate } = useSWR(
    username && repo ? `github-repo-${username}-${repo}-${authToken ? 'auth' : 'noauth'}` : null,
    () => fetcher(username, repo, authToken),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutos
      errorRetryCount: 3,
      errorRetryInterval: 5000,
    }
  )

  return {
    repository: data || null,
    isLoading,
    error: error?.message || null,
    refetch: mutate,
  }
}