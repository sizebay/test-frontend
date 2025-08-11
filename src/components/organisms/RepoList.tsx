import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RepoCard } from "@/components/molecules/RepoCard";
import { useUserRepos } from "@/hooks/useUserRepos";
import { Skeleton } from "@/components/ui/skeleton";

interface RepoListProps {
  username: string;
}

// Componente Skeleton para os cards de repositório
const RepoCardSkeleton = () => (
  <div className="rounded-lg border bg-card p-4 space-y-3">
    {/* Header com nome e linguagem */}
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-48" />
    </div>

    {/* Estatísticas */}
    <div className="flex items-center gap-4 pt-2">
      <div className="flex items-center gap-1">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-3 w-8" />
      </div>
      <div className="flex items-center gap-1">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-3 w-8" />
      </div>
      <div className="flex items-center gap-1">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-3 w-8" />
      </div>
    </div>

    {/* Footer com data */}
    <div className="pt-2">
      <Skeleton className="h-3 w-24" />
    </div>
  </div>
);

export const RepoList = ({ username }: RepoListProps) => {
  const [page, setPage] = useState(1);
  const perPage = 12;
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    hasPrevPage,
    totalPages,
  } = useUserRepos(username, page, perPage);

  if (!username) return null;

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          aria-busy="true"
        >
          {Array.from({ length: perPage }).map((_, i) => (
            <RepoCardSkeleton key={i} />
          ))}
        </div>

        {/* Skeleton para a paginação */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-20" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        role="alert"
        className="rounded-lg border border-destructive/50 bg-destructive/5 p-4"
      >
        <p className="font-medium text-destructive">
          Erro ao carregar repositórios.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {error?.message}
        </p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center">
        <p className="text-muted-foreground">
          Nenhum repositório encontrado para &ldquo;{username}&rdquo;.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          disabled={!hasPrevPage}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Anterior
        </Button>
        <span className="text-sm text-muted-foreground">
          Página {page} de {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={!hasNextPage}
          onClick={() => setPage((p) => p + 1)}
        >
          Próxima
        </Button>
      </div>
    </div>
  );
};
