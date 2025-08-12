"use client"

import type React from "react"
import InputAtom from "../atoms/input-atom"
import { Search } from "lucide-react"

type SearchBoxProps = {
  username: string
  setUsername: (value: string) => void
  isLoading?: boolean
}

export default function SearchBox({ username, setUsername, isLoading = false }: SearchBoxProps) {

  return (
    <div className="flex w-full max-w-xl mx-auto gap-2">
      <InputAtom
        id="github-username"
        label="Nome do usuário do GitHub"
        placeholder="Digite o username do GitHub"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
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
