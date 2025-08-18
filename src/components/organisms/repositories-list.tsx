import { HTMLAttributes } from "react";
import Link from "next/link";

import { TGithubRepository } from "@/types";

import { RepositoryCard } from "../molecules";

export type RepositoriesListProps = HTMLAttributes<HTMLDivElement> & {
  repositories: Array<TGithubRepository>;
};

export function RepositoriesList({
  repositories,
  ...props
}: RepositoriesListProps) {
  return (
    <div
      className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      data-testid="repositories-list"
      {...props}
    >
      {repositories.map((repository) => (
        <Link
          key={repository.id}
          href={`/${repository.owner.name}/${repository.name}`}
        >
          <RepositoryCard repository={repository} />
        </Link>
      ))}
    </div>
  );
}
