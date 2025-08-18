import { HTMLAttributes } from "react";

import { type TGithubRepository } from "@/types";

import { RepositorySummary } from "../molecules";

export type RepositoriesDetailProps = HTMLAttributes<HTMLDivElement> & {
  repository: TGithubRepository;
};

export function RepositoryDetail({
  repository,
  ...props
}: RepositoriesDetailProps) {
  return (
    <div {...props}>
      <RepositorySummary repository={repository} />
    </div>
  );
}
