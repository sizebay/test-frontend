'use client'

import { Avatar, Text } from '../atoms'

interface UserProfileProps {
  name?: string | null
  email?: string | null
  avatarUrl?: string | null
  size?: 'sm' | 'md' | 'lg'
}

export default function UserProfile({ 
  name, 
  email, 
  avatarUrl, 
  size = 'md' 
}: UserProfileProps) {
  const displayName = name || email || 'Usuário'
  
  return (
    <div className="flex items-center space-x-2">
      <Avatar 
        src={avatarUrl} 
        alt={displayName} 
        size={size}
      />
      <Text 
        color="secondary" 
        size={size === 'sm' ? 'xs' : 'sm'} 
        weight="medium"
      >
        {displayName}
      </Text>
    </div>
  )
}