"use client";

import { SearchBox } from "@/components/molecules/SearchBox";
import { RepoList } from "@/components/organisms/RepoList";

interface SearchRepositoriesPageProps {
  username?: string;
}

export function SearchRepositoriesPage({
  username,
}: SearchRepositoriesPageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Pesquisar Repositórios</h1>
        <p className="text-xl text-muted-foreground">
          Digite o nome de um usuário do GitHub para ver seus
          repositórios
        </p>
        <SearchBox initialValue={username} />
      </div>

      {username && <RepoList username={username} />}
    </div>
  );
}
