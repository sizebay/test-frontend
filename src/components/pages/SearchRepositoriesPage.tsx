"use client";
import { SearchBox } from "@/components/molecules/SearchBox";
import { RepoList } from "@/components/organisms/RepoList";

interface Props {
  username?: string;
}

export const SearchRepositoriesPage = ({ username }: Props) => {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Buscar Repositórios</h1>
      <SearchBox initialValue={username} />
      {username && (
        <div className="pt-4">
          <RepoList username={username} />
        </div>
      )}
    </section>
  );
};
