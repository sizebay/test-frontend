"use client";

import { EmptyState } from "@/components/molecules/empty-state";
import { RepositoryCard } from "@/components/molecules/repository-card";
import { UserCard } from "@/components/molecules/user-card";
import { RepositoriesLoading } from "@/components/organisms/repositories-loading";
import { useApp } from "@/hooks/use-app";
import { useSearchFilters } from "@/hooks/use-search-filters";
import { getGithubRepositories } from "@/services/queries/get-repositories";
import { getGithubUser } from "@/services/queries/get-user";
import { errorMessage } from "@/utils/error-messages";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { AlertCircle, FolderGit2, Github } from "lucide-react";
import { useEffect } from "react";

export function UserResultSection() {
  const { username = "" } = useApp();
  const { updateSearchParam } = useSearchFilters();

  const {
    data: user,
    error: userError,
    isFetching: userLoading,
  } = useQuery({
    queryKey: ["user", username],
    queryFn: () => getGithubUser(username),
    enabled: false,
  });

  const {
    data: repositories,
    error: repositoriesError,
    isFetching: reposLoading,
  } = useQuery({
    queryKey: ["repos", username],
    queryFn: () => getGithubRepositories(username),
    enabled: !!user,
  });

  const isLoading = userLoading || reposLoading;
  const hasError = (userError || repositoriesError) as AxiosError;

  useEffect(() => {
    if (user) {
      updateSearchParam({ field: "username", value: user.login });
    }
  }, [user]);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-full">
        {hasError && (
          <div className="mb-8">
            <EmptyState
              title={errorMessage(hasError).title}
              description={errorMessage(hasError).description}
              icon={<AlertCircle className="h-16 w-16 text-destructive" />}
            />
          </div>
        )}

        {user && !hasError && (
          <div className="mb-12 animate-fade-in-up">
            <UserCard user={user} />
          </div>
        )}

        {isLoading && <RepositoriesLoading />}

        {repositories && repositories.length > 0 && !isLoading && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">
                Repositórios públicos ({repositories.length})
              </h3>
            </div>
            <div className="max-w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {repositories.map((repo) => (
                <RepositoryCard key={repo.id} repository={repo} />
              ))}
            </div>
          </div>
        )}

        {repositories &&
          repositories.length === 0 &&
          !isLoading &&
          !hasError && (
            <EmptyState
              title="Nenhum Repositório Público Encontrado"
              description="Este usuário não possui repositórios públicos ou eles podem ser privados."
              icon={<FolderGit2 className="h-16 w-16 text-muted-foreground" />}
            />
          )}

        {(!repositories || repositories.length === 0) && !isLoading && (
          <EmptyState
            title="Explore Repositórios"
            description="Digite um nome de usuário do GitHub acima para descobrir seus incríveis repositórios e se inspirar em seu código."
            icon={<Github className="h-16 w-16 text-primary" />}
          />
        )}
      </div>
    </section>
  );
}
