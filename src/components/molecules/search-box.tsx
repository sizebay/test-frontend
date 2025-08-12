"use client"

import type React from "react"
import { useCallback, useRef, useEffect } from "react"
import InputAtom from "../atoms/input-atom"
import { Search } from "lucide-react"

type SearchBoxProps = {
  username: string
  setUsername: (value: string) => void
  isLoading?: boolean
}

export default function SearchBox({ username, setUsername, isLoading = false }: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }, [setUsername])

  // Auto-focus no input quando o componente é montado
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      // Posicionar cursor no final do texto
      const length = inputRef.current.value.length
      inputRef.current.setSelectionRange(length, length)
    }
  }, []) // Executar apenas no mount

  return (
    <div className="flex w-full max-w-xl mx-auto gap-2 px-4 sm:px-0">
      <InputAtom
        ref={inputRef}
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
