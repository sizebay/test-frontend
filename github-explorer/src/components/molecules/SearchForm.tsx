'use client'

import { useState, FormEvent } from 'react'
import { Button } from '../atoms'

interface SearchFormProps {
  onSearch: (username: string) => void
  initialValue?: string
  isLoading?: boolean
}

export default function SearchForm({ 
  onSearch, 
  initialValue = '', 
  isLoading = false 
}: SearchFormProps) {
  const [username, setUsername] = useState(initialValue)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      onSearch(username.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <div className="flex-1">
          <label htmlFor="username" className="sr-only">
            Nome de usuário do GitHub
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite o nome de usuário do GitHub"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          variant="primary" 
          isLoading={isLoading}
          disabled={!username.trim() || isLoading}
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </Button>
      </div>
    </form>
  )
}