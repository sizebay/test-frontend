import { TGithubRepository } from "@/types";

import { RepositoryCard } from "../organisms";

type RepositoriesListProps = {
  repositories: Array<TGithubRepository>;
};

export function RepositoriesList({ repositories }: RepositoriesListProps) {
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
}
