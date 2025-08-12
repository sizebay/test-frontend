'use client'

import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

export function useGitHubAuth() {
  const { data: session, status } = useSession()

  const authToken = useMemo(() => {
    // Usa o token público do .env.local
    return process.env.NEXT_PUBLIC_GITHUB_TOKEN
  }, [])

  const isAuthenticated = status === 'authenticated'
  const isLoading = status === 'loading'

  return {
    session,
    authToken,
    isAuthenticated,
    isLoading,
    user: session?.user
  }
}