import React from 'react'
import { GitHubUser } from '@/types'
import { Avatar } from '@/components/atoms'
import { Button } from '@/components/atoms'

interface UserCardProps {
  user: GitHubUser
  className?: string
}

export function UserCard({ user, className = '' }: UserCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const formatWebsite = (blog: string | null) => {
    if (!blog) return null
    if (blog.startsWith('http')) return blog
    return `https://${blog}`
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto border border-gray-100 ${className}`}>
      {/* Header com avatar e informações básicas */}
      <div className="flex items-start gap-4 mb-6">
        <div className="relative">
          <div className="ring-4 ring-blue-100 rounded-full">
            <Avatar
              src={user.avatar_url}
              alt={user.name || user.login}
              size="lg"
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-gray-900 truncate">
            {user.name || user.login}
          </h2>
          {user.location && (
            <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
              <span>📍</span>
              {user.location}
            </p>
          )}
          {user.bio && (
            <p className="text-sm text-gray-700 mt-2 line-clamp-2">
              {user.bio}
            </p>
          )}
        </div>
      </div>

      {/* Informações detalhadas */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">Username</span>
          <span className="text-sm text-gray-900 font-mono">{user.login}</span>
        </div>
        
        {user.company && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-600">Company</span>
            <span className="text-sm text-gray-900">{user.company}</span>
          </div>
        )}
        
        {user.blog && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-600">Website</span>
            <a 
              href={formatWebsite(user.blog) || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:text-blue-700 truncate max-w-32"
            >
              {user.blog}
            </a>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">Followers</span>
          <span className="text-sm text-gray-900 font-semibold">{user.followers}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">Public Repos</span>
          <span className="text-sm text-gray-900 font-semibold">{user.public_repos}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">Member Since</span>
          <span className="text-sm text-gray-900">{formatDate(user.created_at)}</span>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Button
          onClick={() => window.open(user.html_url, '_blank')}
          variant="secondary"
          className="w-full text-pink-500 border border-pink-200 hover:bg-pink-50 hover:border-pink-300 bg-transparent"
        >
          View Profile
        </Button>
      </div>
    </div>
  )
}