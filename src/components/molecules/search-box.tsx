"use client"

import type React from "react"

import { useState, useCallback } from "react"
import InputAtom from "../atoms/input-atom"
import ButtonAtom from "../atoms/button-atom"
import { Search } from "lucide-react"

type SearchBoxProps = {
  defaultUsername?: string
  onSearch: (username: string) => void
  isLoading?: boolean
}

export default function SearchBox({ defaultUsername = "jorgemadson", onSearch, isLoading = false }: SearchBoxProps) {
  const [username, setUsername] = useState(defaultUsername)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      onSearch(username.trim())
    },
    [onSearch, username],
  )

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl mx-auto gap-2">
      <InputAtom
        id="github-username"
        label="Nome do usuário do GitHub"
        placeholder="Digite o username do GitHub"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        aria-label="Buscar repositórios por username"
      />
      <ButtonAtom type="submit" disabled={isLoading}>
        <Search className="h-4 w-4 mr-2" />
        Buscar
      </ButtonAtom>
    </form>
  )
}
