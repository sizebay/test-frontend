"use client"

import { AlertCircle } from "lucide-react"
import RepoCard from "../molecules/repo-card"
import SearchBox from "../molecules/search-box"
import { useGitHubSearch } from "@/hooks/useGitHubSearch"

export default function RepoList() {
  const { username, setUsername, repos, isLoading, error } = useGitHubSearch()

  return (
    <section className="w-full">
      <div className="mb-6">
        <SearchBox username={username} setUsername={setUsername} isLoading={isLoading} />
      </div>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse h-28 rounded-lg bg-muted" />
          ))}
        </div>
      ) : null}

      {error ? (
        <div className="flex items-center gap-2 p-4 rounded-md border text-sm">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <span>{(error as Error)?.message || "Erro ao carregar repositórios"}</span>
        </div>
      ) : null}

      {/* Empty state */}
      {!isLoading && !error && repos.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nenhum repositório encontrado para "{username}".</p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <RepoCard
            key={repo.id}
            name={repo.name}
            fullName={repo.full_name}
            description={repo.description}
            language={repo.language}
            owner={repo.owner.login}
          />
        ))}
      </div>
    </section>
  )
}
