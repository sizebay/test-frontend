'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useGitHubRepositories } from '@/hooks/useGitHubRepositories'
import { useGitHubAuth } from '@/hooks/useGitHubAuth'
import { HomeTemplate } from '@/components/templates'

export default function Home() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [searchUsername, setSearchUsername] = useState('')
  const { isAuthenticated } = useGitHubAuth()
  
  useEffect(() => {
    const userFromUrl = searchParams.get('user')
    if (userFromUrl) {
      setUsername(userFromUrl)
      setSearchUsername(userFromUrl)
    }
  }, [searchParams])
  
  const { repositories, isLoading, error } = useGitHubRepositories(searchUsername)

  const handleSearch = (searchValue: string) => {
    setUsername(searchValue)
    setSearchUsername(searchValue)
    const newUrl = new URL(window.location.href)
    newUrl.searchParams.set('user', searchValue)
    router.push(newUrl.pathname + newUrl.search)
  }

  const isRateLimitError = error?.includes('403') || error?.includes('rate limit')
  const shouldShowAuthHeader = isRateLimitError && !isAuthenticated

  return (
    <HomeTemplate
      searchUsername={username}
      onSearch={handleSearch}
      repositories={repositories}
      isLoading={isLoading}
      error={error}
      isAuthenticated={isAuthenticated}
      showAuthError={shouldShowAuthHeader}
      authErrorMessage="Limite de requisições atingido. Faça login para continuar usando a aplicação."
    />
  )
}
