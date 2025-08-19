"use client";

import { Eye, GitFork, LucideProps, Star } from "lucide-react";

import { TGithubRepository } from "@/types";
import { cn, RepositoryVisibilityTranslator } from "@/utils";

import {
  Badge,
  Card,
  CardBody,
  CardDescription,
  CardDetail,
  CardFooter,
  CardFooterProps,
  CardHeader,
  CardHeaderProps,
  CardProps,
  CardText,
  CardTitle,
  Divider,
  type CardDescriptionProps,
} from "../atoms";

import { RepositoryVisibilityIcon } from "./repository-visibility-icon";

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
        "flex flex-col items-start justify-center gap-3 overflow-hidden"
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

type RepositoryCardProps = CardProps & {
  repository: TGithubRepository;
};

export function RepositoryCard({ repository, ...props }: RepositoryCardProps) {
  return (
    <Card {...props} data-testid="repository-card">
      <RepositoryCardHeader repository={repository} />
      <CardBody className="h-24 ">
        <div className="w-full overflow-hidden">
          <RepositoryCardDescription repository={repository} />
        </div>
      </CardBody>
      <RepositoryCardFooter repository={repository} />
    </Card>
  );
}
