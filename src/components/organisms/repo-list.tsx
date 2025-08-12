"use client"

import { AlertCircle } from "lucide-react"
import { useMemo } from "react"
import RepoCard from "../molecules/repo-card"
import SearchBox from "../molecules/search-box"
import PaginationControls from "../molecules/pagination-controls"
import { useGitHubSearch } from "@/hooks/useGitHubSearch"

export default function RepoList() {
  const { 
    username, 
    setUsername, 
    repos, 
    isLoading, 
    error,
    currentPage,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage
  } = useGitHubSearch()

  const showPagination = useMemo(
    () => !isLoading && !error && repos.length > 0 && (hasNextPage || hasPrevPage),
    [isLoading, error, repos.length, hasNextPage, hasPrevPage]
  )

  const skeletonItems = useMemo(() => 
    Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="skeleton-loading h-28 rounded-lg" />
    )), 
    []
  )

  return (
    <section className="w-full" aria-label="Lista de repositórios do GitHub">
      <div className="mb-6">
        <SearchBox username={username} setUsername={setUsername} isLoading={isLoading} />
      </div>

      {isLoading ? (
        <div 
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          aria-label="Carregando repositórios"
          role="status"
          aria-live="polite"
        >
          {skeletonItems}
          <span className="sr-only">Carregando repositórios...</span>
        </div>
      ) : null}

      {error ? (
        <div 
          className="flex items-center gap-2 p-4 rounded-md border text-sm"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="h-4 w-4 text-destructive" aria-hidden="true" />
          <span>{(error as Error)?.message || "Erro ao carregar repositórios"}</span>
        </div>
      ) : null}

      {/* Empty state */}
      {!isLoading && !error && repos.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nenhum repositório encontrado para "{username}".</p>
      ) : null}

      <div 
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="list"
        aria-label="Repositórios encontrados"
      >
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

      {showPagination && (
        <PaginationControls
          currentPage={currentPage}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          onNextPage={nextPage}
          onPrevPage={prevPage}
          isLoading={isLoading}
        />
      )}
    </section>
  )
}
