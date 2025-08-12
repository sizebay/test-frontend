'use client'

import React, { useState, useEffect } from 'react'
import { GitHubUser } from '@/types'
import { Avatar } from '@/components/atoms'
import { Button } from '@/components/atoms'

interface UserCardProps {
  user: GitHubUser
  className?: string
}

export function UserCard({ user, className = '' }: UserCardProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const formatDate = (dateString: string) => {
    if (!isClient) {
      // Fallback simples para SSR
      return new Date(dateString).getFullYear().toString()
    }
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const formatWebsite = (blog: string | null) => {
    if (!blog) return null
    if (blog.startsWith('http')) return blog
    return `https://${blog}`
  }

  return (
    <div className={`bg-gray-800 rounded-2xl shadow-lg p-6 max-w-md mx-auto border border-gray-700 ${className}`}>
      {/* Header com avatar e informações básicas */}
      <div className="flex items-start gap-4 mb-6">
        <div className="relative">
          <div className="ring-4 ring-blue-500/20 rounded-full">
            <Avatar
              src={user.avatar_url}
              alt={user.name || user.login}
              size="lg"
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-white truncate">
            {user.name || user.login}
          </h2>
          {user.location && (
            <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
              <span>📍</span>
              {user.location}
            </p>
          )}
          {user.bio && (
            <p className="text-sm text-gray-300 mt-2 line-clamp-2">
              {user.bio}
            </p>
          )}
        </div>
      </div>

      {/* Informações detalhadas */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-400">Username</span>
          <span className="text-sm text-white font-mono">{user.login}</span>
        </div>
        
        {user.company && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-400">Company</span>
            <span className="text-sm text-white">{user.company}</span>
          </div>
        )}
        
        {user.blog && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-400">Website</span>
            <a 
              href={formatWebsite(user.blog) || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-300 hover:text-blue-100 truncate max-w-32"
            >
              {user.blog}
            </a>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-400">Followers</span>
          <span className="text-sm text-white font-semibold">{user.followers}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-400">Public Repos</span>
          <span className="text-sm text-white font-semibold">{user.public_repos}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-400">Member Since</span>
          <span className="text-sm text-white">{formatDate(user.created_at)}</span>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <Button
          onClick={() => window.open(user.html_url, '_blank')}
          variant="secondary"
          className="w-full text-blue-400 border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-400 bg-transparent"
        >
          View Profile
        </Button>
      </div>
    </div>
  )
}