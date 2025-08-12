"use client";

import { SearchBox } from "@/components/molecules/SearchBox";
import { RepoList } from "@/components/organisms/RepoList";
import { Search } from "lucide-react";
import { UserCard } from "../molecules/UserCard";

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

      {!username && (
        <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border">
            <Search className="h-5 w-5" aria-hidden />
          </div>
          <p>
            Digite um username do GitHub acima e clique em Buscar para
            começar.
          </p>
        </div>
      )}

      {username && (
        <div className="space-y-6 pt-2">
          <UserCard username={username} />
          <div className="pt-2">
            <RepoList username={username} list={[]} />
          </div>
        </div>
      )}
    </div>
  );
}
