'use client'

import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

// Usar o tipo Session estendido do arquivo de tipos
type ExtendedSession = {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
  expires: string
  accessToken?: string
}

export function useGitHubAuth() {
  const { data: session, status } = useSession() as { data: ExtendedSession | null, status: string }

  const authToken = useMemo(() => {
    // Priorizar token da sessão autenticada
    if (session?.accessToken) {
      return session.accessToken
    }
    
    // Fallback para token público
    return process.env.NEXT_PUBLIC_GITHUB_TOKEN
  }, [session?.accessToken])

  const isAuthenticated = Boolean(session && authToken)
  const isLoading = status === 'loading'

  return {
    session,
    authToken,
    isAuthenticated,
    isLoading,
    user: session?.user
  }
}