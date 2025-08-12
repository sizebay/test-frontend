"use client"

import useSWR from 'swr'
import { useQueryState } from 'nuqs'
import { fetchUserRepos } from '@/services/github'
import { useDebounce } from './useDebounce'
import type { Repo } from '@/types/github'
import { useEffect } from 'react'

export function useGitHubSearch(defaultUsername = "jorgemadson") {
  const [username, setUsername] = useQueryState("username", { 
    defaultValue: defaultUsername 
  })
  
  const [currentPage, setCurrentPage] = useQueryState("page", {
    defaultValue: 1,
    parse: (value) => parseInt(value) || 1,
    serialize: (value) => value.toString()
  })
  
  const debouncedUsername = useDebounce(username || defaultUsername, 500)
  
  // Reset page when username changes
  useEffect(() => {
    if (username !== debouncedUsername) {
      setCurrentPage(1)
    }
  }, [debouncedUsername, username, setCurrentPage])
  
  const { data, isLoading, error } = useSWR(
    debouncedUsername ? `repos/${debouncedUsername}/page/${currentPage}` : null,
    () => fetchUserRepos(debouncedUsername, currentPage, 12),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // 1 minute
    }
  )

  const repos: Repo[] = data || []
  const hasNextPage = repos.length === 12 // If we got 12 repos, there might be more
  
  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return {
    username: username || '',
    setUsername,
    debouncedUsername,
    repos,
    isLoading,
    error,
    currentPage,
    hasNextPage,
    hasPrevPage: currentPage > 1,
    nextPage,
    prevPage,
    setCurrentPage,
  }
}