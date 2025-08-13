import React from 'react'
import { CalendarIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { InfoItem, Text } from '../atoms'
import { cn } from '@/lib/utils'

interface RepositoryInfoProps {
  language?: string | null
  createdAt: string
  updatedAt: string
  license?: { name: string } | null
  size: number
  defaultBranch: string
  isPrivate: boolean
  topics?: string[]
  className?: string
}

export function RepositoryInfo({
  language,
  createdAt,
  updatedAt,
  license,
  size,
  defaultBranch,
  isPrivate,
  topics,
  className
}: RepositoryInfoProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <div className="bg-gray-800 rounded-lg p-6">
        <Text variant="heading" size="xl" className="text-white mb-4">
          Informações do Projeto
        </Text>
        
        <div className="space-y-4">
          {language && (
            <InfoItem
              icon={<CodeBracketIcon className="w-5 h-5" />}
              label="Linguagem principal"
              value={language}
              iconColor="text-blue-400"
            />
          )}
          
          <InfoItem
            icon={<CalendarIcon className="w-5 h-5" />}
            label="Criado em"
            value={formatDate(createdAt)}
            iconColor="text-green-400"
          />
          
          <InfoItem
            icon={<CalendarIcon className="w-5 h-5" />}
            label="Última atualização"
            value={formatDate(updatedAt)}
            iconColor="text-yellow-400"
          />
          
          {license && (
            <InfoItem
              label="Licença"
              value={license.name}
            />
          )}
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6">
        <Text variant="heading" size="xl" className="text-white mb-4">
          Estatísticas Adicionais
        </Text>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <Text className="text-gray-300">Tamanho:</Text>
            <Text className="text-white">{(size / 1024).toFixed(1)} MB</Text>
          </div>
          
          <div className="flex justify-between">
            <Text className="text-gray-300">Branch padrão:</Text>
            <Text className="text-white font-mono">{defaultBranch}</Text>
          </div>
          
          <div className="flex justify-between">
            <Text className="text-gray-300">Visibilidade:</Text>
            <Text className={`font-medium ${
              isPrivate ? 'text-red-400' : 'text-green-400'
            }`}>
              {isPrivate ? 'Privado' : 'Público'}
            </Text>
          </div>
          
          {topics && topics.length > 0 && (
            <div>
              <Text className="text-gray-300 block mb-2">Tópicos:</Text>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-blue-600 text-blue-100 px-2 py-1 rounded text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RepositoryInfo