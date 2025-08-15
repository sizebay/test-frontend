"use client";

import { RepositoryVisibilityTranslator } from "@/translators";
import { TGithubRepository } from "@/types";
import { cn } from "@/helpers";

import { Badge, CardHeader, type CardHeaderProps, CardTitle } from "../atoms";

import { RepositoryVisibilityIcon } from "./repository-visibility-icon";

type RepositoryCardHeaderProps = CardHeaderProps & {
  repository: TGithubRepository;
};

export function RepositoryCardHeader({
  repository,
  ...props
}: RepositoryCardHeaderProps) {
  return (
    <CardHeader
      {...props}
      className={cn("justify-start lg:justify-between", props.className)}
    >
      <CardTitle>
        <RepositoryVisibilityIcon visibility={repository.visibility} />
        <span className="flex gap-2 items-center max-w-40 sm:max-w-44 w-full">
          {repository.name}
        </span>
      </CardTitle>
      <Badge>
        {RepositoryVisibilityTranslator.toPt(repository.visibility)}
      </Badge>
    </CardHeader>
  );
}
