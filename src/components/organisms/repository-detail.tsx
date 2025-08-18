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
    // <div className="flex flex-col gap-4 w-full" {...props}>
    //   <div className="flex flex-col gap-2">
    //     <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start lg:items-center">
    //       <div className="flex gap-2 items-center">
    //         <Globe />
    //         <PageTitle>{repository.name}</PageTitle>
    //       </div>
    //       <Badge className="w-fit h-fit">
    //         {RepositoryVisibilityTranslator.toPt(repository.visibility)}
    //       </Badge>
    //     </div>
    //     <Typography className="text-neutral-500">
    //       {repository.description}
    //     </Typography>
    //     <div className="flex gap-4 items-center justify-start w-full">
    //       <CardDetail>
    //         <div className="w-2 h-2 bg-helper-amber rounded-full" />
    //         <CardText>{repository.mainLanguage}</CardText>
    //       </CardDetail>
    //       <CardDetail>
    //         <Star {...iconProps} />
    //         <CardText>{repository.starsCount}</CardText>
    //       </CardDetail>
    //       <CardDetail>
    //         <GitFork {...iconProps} />
    //         <CardText>{repository.forksCount}</CardText>
    //       </CardDetail>
    //       <CardDetail>
    //         <Eye {...iconProps} />
    //         <CardText>{repository.watchCount}</CardText>
    //       </CardDetail>
    //     </div>
    //   </div>

    //   <UnderConstructionEmptyState />
    // </div>
    <div className="flex flex-col gap-4 w-full" {...props}>
      <RepositorySummary repository={repository} />
      <UnderConstructionEmptyState />
    </div>
  );
}
