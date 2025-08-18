import { HTMLAttributes } from "react";

import { type TGithubRepository } from "@/types";

import { RepositorySummary, UnderConstructionEmptyState } from "../molecules";

export type RepositoriesDetailProps = HTMLAttributes<HTMLDivElement> & {
  repository: TGithubRepository;
};

export function RepositoryDetail({
  repository,
  ...props
}: RepositoriesDetailProps) {
  return (
    <div className="flex flex-col gap-4 w-full" {...props}>
      <RepositorySummary repository={repository} />
      <UnderConstructionEmptyState />
    </div>
  );
}
