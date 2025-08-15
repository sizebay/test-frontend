"use client";

import { TGithubRepository } from "@/types";
import { cn } from "@/helpers";

import { CardDescription, type CardDescriptionProps } from "../atoms";

type RepositoryCardDescriptionProps = CardDescriptionProps & {
  repository: TGithubRepository;
};

export function RepositoryCardDescription({
  repository,
  ...props
}: RepositoryCardDescriptionProps) {
  return (
    <CardDescription
      {...props}
      className={cn("line-clamp-2 w-full", props.className)}
    >
      {repository.description}
    </CardDescription>
  );
}
