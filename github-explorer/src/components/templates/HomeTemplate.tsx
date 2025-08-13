'use client'

import { Repository, GitHubUser } from '@/types'
import { useMemo } from 'react'
import { Text } from '../atoms'
import { SearchForm, AlertMessage, UserCard } from '../molecules'
import { RepositoryGrid, Header } from '../organisms'

interface HomeTemplateProps {
  // Search
  searchUsername: string
  onSearch: (username: string) => void
  
  // User
  user: GitHubUser | null
  userLoading: boolean
  userError: string | null
  
  // Repositories
  repositories: Repository[]
  isLoading: boolean
  error: string | null
  
  // Auth
  isAuthenticated: boolean
  showAuthError?: boolean
  authErrorMessage?: string
}

export default function HomeTemplate({
  searchUsername,
  onSearch,
  user,
  userLoading,
  userError,
  repositories,
  isLoading,
  error,
  isAuthenticated,
  showAuthError = false,
  authErrorMessage
}: HomeTemplateProps) {
  const shouldShowAuthHeader = useMemo(() => {
    return showAuthError && !isAuthenticated && authErrorMessage
  }, [showAuthError, isAuthenticated, authErrorMessage])

  const emptyMessage = useMemo(() => {
    return searchUsername ? `Nenhum repositório encontrado para "${searchUsername}"` : 'Digite um nome de usuário para começar'
  }, [searchUsername])
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {shouldShowAuthHeader && (
        <Header 
          showAuthButton={true} 
          authMessage={authErrorMessage} 
        />
      )}
      
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col text-center mb-12">
          <Text variant="heading" size="xl" className="mb-4">
            Explore Repositórios GitHub
          </Text>
          <Text color="secondary" size="lg">
            Descubra projetos incríveis e suas estatísticas
          </Text>
        </div>

        <SearchForm 
          onSearch={onSearch}
          initialValue={searchUsername}
          isLoading={isLoading}
        />

        {/* User Card */}
        {user && (
          <div className="mb-8 flex justify-center">
            <UserCard user={user} />
          </div>
        )}

        {userError && (
          <div className="mb-8">
            <AlertMessage 
              message={userError} 
              type="error" 
            />
          </div>
        )}

        {error && !shouldShowAuthHeader && (
          <div className="mb-8">
            <AlertMessage 
              message={error} 
              type="error" 
            />
          </div>
        )}

        <RepositoryGrid 
          repositories={repositories}
          isLoading={isLoading}
          error={shouldShowAuthHeader ? null : error}
          emptyMessage={emptyMessage}
        />
      </main>
    </div>
  )
}