"use client"

import useSWR from 'swr'
import { useQueryState } from 'nuqs'
import { fetchUserRepos } from '@/services/github'
import { useDebounce } from './useDebounce'
import type { Repo } from '@/types/github'

export function useGitHubSearch(defaultUsername = "jorgemadson") {
  const [username, setUsername] = useQueryState("username", { 
    defaultValue: defaultUsername 
  })
  
  const debouncedUsername = useDebounce(username || defaultUsername, 500)
  
  const { data, isLoading, error } = useSWR(
    debouncedUsername ? `repos/${debouncedUsername}` : null,
    () => fetchUserRepos(debouncedUsername),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // 1 minute
    }
  )

  const repos: Repo[] = data || []

  return {
    username: username || '',
    setUsername,
    debouncedUsername,
    repos,
    isLoading,
    error,
  }
}