'use client'

import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Logo } from '../atoms'
import { UserProfile, AuthButton, AlertMessage } from '../molecules'

interface HeaderProps {
  showAuthButton?: boolean
  authMessage?: string
}

export default function Header({ showAuthButton = false, authMessage }: HeaderProps) {
  const { data: session, status } = useSession()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSignIn = () => {
    signIn('github')
  }

  const handleSignOut = () => {
    signOut()
  }

  const isLoading = !isClient || status === 'loading'
  const isAuthenticated = isClient && !!session

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 py-3 sm:px-6 sm:py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Mobile layout */}
        <div className="flex items-center space-x-2 sm:hidden">
          {isAuthenticated && (
            <UserProfile
              name={session.user?.name}
              email={session.user?.email}
              avatarUrl={session.user?.image}
              size="sm"
            />
          )}
          
          <AuthButton
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
            onSignIn={handleSignIn}
            onSignOut={handleSignOut}
          />
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:flex items-center space-x-4">
          {showAuthButton && authMessage && (
            <AlertMessage 
              message={authMessage} 
              type="warning" 
              className="mr-4"
            />
          )}

          <div className="flex items-center space-x-3">
            {isAuthenticated && (
              <UserProfile
                name={session.user?.name}
                email={session.user?.email}
                avatarUrl={session.user?.image}
              />
            )}
            
            <AuthButton
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
              onSignIn={handleSignIn}
              onSignOut={handleSignOut}
            />
          </div>
        </div>
      </div>

      {/* Mobile alert message - shown below header */}
      {showAuthButton && authMessage && (
        <div className="sm:hidden px-4 py-2 border-t border-gray-800">
          <AlertMessage 
            message={authMessage} 
            type="warning"
          />
        </div>
      )}
    </header>
  )
}