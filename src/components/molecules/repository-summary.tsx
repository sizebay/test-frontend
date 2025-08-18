"use client";

import { BadgeAlert, Eye, GitFork, LucideProps, Star } from "lucide-react";

import { TGithubRepository } from "@/types";
import { cn, RepositoryVisibilityTranslator } from "@/utils";

import {
  Badge,
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
  CardTitleProps,
  type CardDescriptionProps,
} from "../atoms";

import { RepositoryVisibilityIcon } from "./repository-visibility-icon";
import { RepositoryActions } from "./repository-actions";

type RepositorySummaryDescriptionProps = CardDescriptionProps & {
  repository: TGithubRepository;
};

export function RepositorySummaryDescription({
  repository,
  ...props
}: RepositorySummaryDescriptionProps) {
  return (
    <CardDescription
      {...props}
      className={cn("line-clamp-2 w-full", props.className)}
    >
      {repository.description}
    </CardDescription>
  );
}

type RepositorySummaryTitleProps = CardTitleProps;

export function RepositorySummaryTitle(props: RepositorySummaryTitleProps) {
  return <CardTitle size="3xl" {...props} />;
}

type RepositorySummaryHeaderProps = CardHeaderProps & {
  repository: TGithubRepository;
};

export function RepositorySummaryHeader({
  repository,
  ...props
}: RepositorySummaryHeaderProps) {
  return (
    <CardHeader
      {...props}
      className={cn(
        "flex-col lg:flex-row items-start lg:items-center justify-start",
        props.className
      )}
    >
      <RepositorySummaryTitle>
        <RepositoryVisibilityIcon
          size={32}
          visibility={repository.visibility}
        />
        <span className="flex gap-2 items-center w-full max-w-full sm:max-w-96">
          {repository.name}
        </span>
      </RepositorySummaryTitle>
      <Badge className="h-fit">
        {RepositoryVisibilityTranslator.toPt(repository.visibility)}
      </Badge>
    </CardHeader>
  );
}

type RepositorySummaryFooterProps = CardFooterProps & {
  repository: TGithubRepository;
};

export function RepositorySummaryFooter({
  repository,
  ...props
}: RepositorySummaryFooterProps) {
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
        <CardDetail>
          <BadgeAlert {...iconProps} />
          <CardText>{repository.openIssuesCount}</CardText>
        </CardDetail>
      </div>
    </CardFooter>
  );
}

type RepositoryCardProps = CardProps & {
  repository: TGithubRepository;
};

export function RepositorySummary({
  repository,
  ...props
}: RepositoryCardProps) {
  return (
    <div {...props} className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col w-full lg:w-1/2">
        <RepositorySummaryHeader repository={repository} />
        <CardBody>
          <RepositorySummaryDescription repository={repository} />
          <RepositorySummaryFooter repository={repository} />
        </CardBody>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 gap-2 justify-start items-start lg:items-end">
        <RepositoryActions repository={repository} />
        <CardText>Atualizado em: {repository.updatedAt}</CardText>
        <CardText>Criado em: {repository.createdAt}</CardText>
      </div>
    </div>
  );
}
