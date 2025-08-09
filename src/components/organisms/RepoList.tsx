import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RepoCard } from "../molecules/RepoCard";
import { useUserRepos } from "@/hooks/useUserRepos";

interface RepoListProps {
  username: string;
}

export const RepoList = ({ username }: RepoListProps) => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    hasPrevPage,
  } = useUserRepos(username, page, perPage);

  if (!username) return null;

  if (isLoading) {
    return (
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        aria-busy
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-40 rounded-lg border bg-muted animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div role="alert" className="rounded-lg border p-4">
        <p className="font-medium">Erro ao carregar repositórios.</p>
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
          Nenhum repositório encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((repo: any) => (
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
          Página {page}
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
