import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RepoCard } from "@/components/molecules/RepoCard";
import { useUserRepos } from "@/hooks/useUserRepos";
import { Skeleton } from "@/components/ui/skeleton";
import { GitHubRepoProps } from "@/types/github";
import { Search, AlertCircle, UserX } from "lucide-react";

interface RepoListProps {
  username: string;
  list: GitHubRepoProps[];
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

  if (!username) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <Search className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Digite um nome de usuário
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Para começar a explorar repositórios, digite o nome de um
          usuário do GitHub no campo de busca acima.
        </p>
      </div>
    );
  }

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
    // Verifica se é erro 404 (usuário não encontrado)
    const isUserNotFound =
      error?.message?.includes("404") ||
      error?.message?.toLowerCase().includes("not found") ||
      error?.message?.toLowerCase().includes("não encontrado");

    if (isUserNotFound) {
      return (
        <div className="text-center py-12">
          <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <UserX className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Usuário não encontrado
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-4">
            O usuário <strong>&ldquo;{username}&rdquo;</strong> não
            foi encontrado no GitHub. Verifique se o nome está correto
            e tente novamente.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>Possíveis causas:</p>
            <ul className="mt-2 space-y-1">
              <li>• O nome de usuário está incorreto</li>
              <li>• O usuário pode ter mudado de nome</li>
              <li>• A conta pode ter sido desativada</li>
            </ul>
          </div>
        </div>
      );
    }

    // Outros tipos de erro
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="h-8 w-8 text-destructive" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-destructive">
          Erro ao carregar repositórios
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-4">
          Não foi possível carregar os repositórios de{" "}
          <strong>&ldquo;{username}&rdquo;</strong>. Tente novamente
          em alguns instantes.
        </p>
        {error?.message && (
          <div className="bg-muted/50 rounded-lg p-3 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>Detalhes do erro:</strong> {error.message}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <Search className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Nenhum repositório encontrado
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          O usuário <strong>&ldquo;{username}&rdquo;</strong> não
          possui repositórios públicos ou todos os repositórios são
          privados.
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
