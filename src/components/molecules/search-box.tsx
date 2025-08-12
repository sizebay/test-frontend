"use client"

import type React from "react"
import { useCallback } from "react"
import InputAtom from "../atoms/input-atom"
import { Search } from "lucide-react"

type SearchBoxProps = {
  username: string
  setUsername: (value: string) => void
  isLoading?: boolean
}

export default function SearchBox({ username, setUsername, isLoading = false }: SearchBoxProps) {
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }, [setUsername])

  return (
    <div className="flex w-full max-w-xl mx-auto gap-2 px-4 sm:px-0">
      <InputAtom
        id="github-username"
        label="Nome do usuário do GitHub"
        placeholder="Digite o username do GitHub"
        value={username}
        onChange={handleInputChange}
        aria-label="Buscar repositórios por username"
      />
      {isLoading && (
        <div className="flex items-center px-3">
          <Search className="h-4 w-4 animate-spin" />
        </div>
      )}
    </div>
  )
}
