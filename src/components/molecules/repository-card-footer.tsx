"use client";

import { Eye, GitFork, LucideProps, Star } from "lucide-react";

import { TGithubRepository } from "@/types";
import { cn } from "@/helpers";

import {
  CardDetail,
  CardFooter,
  type CardFooterProps,
  CardText,
  Divider,
} from "../atoms";

type RepositoryCardFooterProps = CardFooterProps & {
  repository: TGithubRepository;
};

export function RepositoryCardFooter({
  repository,
  ...props
}: RepositoryCardFooterProps) {
  const iconProps: LucideProps = {
    size: 16,
    className: "text-neutral-600",
  };

  return (
    <CardFooter
      {...props}
      className={cn(
        props.className,
        "flex flex-col items-start justify-center gap-3"
      )}
    >
      <div className="flex gap-4 items-center justify-start w-full">
        <CardDetail>
          <div className="w-2 h-2 bg-helper-amber rounded-full" />
          <CardText>{repository.mainLanguage}</CardText>
        </CardDetail>
        <CardDetail>
          <Star {...iconProps} />
          <CardText>{repository.starsCount}</CardText>
        </CardDetail>
        <CardDetail>
          <GitFork {...iconProps} />
          <CardText>{repository.forksCount}</CardText>
        </CardDetail>
        <CardDetail>
          <Eye {...iconProps} />
          <CardText>{repository.watchCount}</CardText>
        </CardDetail>
      </div>
      <Divider />
      <CardText>Atualizado em: {repository.updatedAt}</CardText>
    </CardFooter>
  );
}
