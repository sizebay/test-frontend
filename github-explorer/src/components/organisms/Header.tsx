'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Logo } from '../atoms'
import { UserProfile, AuthButton, AlertMessage } from '../molecules'

interface HeaderProps {
  showAuthButton?: boolean
  authMessage?: string
}

export default function Header({ showAuthButton = false, authMessage }: HeaderProps) {
  const { data: session, status } = useSession()

  const handleSignIn = () => {
    signIn('github')
  }

  const handleSignOut = () => {
    signOut()
  }

  const isLoading = status === 'loading'
  const isAuthenticated = !!session

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Logo />

        <div className="flex items-center space-x-4">
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
    </header>
  )
}