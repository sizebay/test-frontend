import {
  Download,
  Eye,
  GitFork,
  Github,
  Globe,
  LucideProps,
  Share,
  Star,
} from "lucide-react";

import { HTTPStatus, IHTTPClient } from "@/infra";
import { IGetRepositoryByIdAction } from "@/actions";

import {
  LinkButton,
  RepositoryNotFoundEmptyState,
  RepositoryVisibilityIcon,
  UnderConstructionEmptyState,
} from "../molecules";
import {
  Badge,
  Button,
  CardDetail,
  CardText,
  PageTitle,
  Typography,
} from "../atoms";
import { RepositoryVisibilityTranslator } from "@/translators";
import { GithubRepositoriesMapper } from "@/mappers";
import { TGithubRepository } from "@/types";

type RepositoriesListProps = {
  getRepositoryById: IGetRepositoryByIdAction;
  httpClient: IHTTPClient;
  requestParams: { token?: string; userName: string; repositoryName: string };
};

export async function RepositoryDetails({
  getRepositoryById,
  httpClient,
  requestParams,
}: RepositoriesListProps) {
  const { data, error } = await getRepositoryById({
    httpClient,
    options: requestParams,
  });

  const iconProps: LucideProps = {
    size: 16,
    className: "text-neutral-600",
  };

  const repository = data
    ? GithubRepositoriesMapper.toFrontend(data)
    : ({} as TGithubRepository);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 lg:justify-between w-full">
      {error?.status === HTTPStatus.NOT_FOUND && (
        <RepositoryNotFoundEmptyState />
      )}
      {data && (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start lg:items-center">
              <div className="flex gap-2 items-center">
                <Globe />
                <PageTitle>{repository.name}</PageTitle>
              </div>
              <Badge className="w-fit h-fit">
                {RepositoryVisibilityTranslator.toPt(repository.visibility)}
              </Badge>
            </div>
            <Typography className="text-neutral-500">
              {repository.description}
            </Typography>
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
          </div>
          <div className="flex gap-2 w-full lg:w-fit flex-wrap">
            <Button variant="secondary" leftIcon={<Share />} className="grow">
              Compartilhar
            </Button>
            <Button
              variant="secondary"
              leftIcon={<Download />}
              className="grow"
            >
              Clonar
            </Button>
            <LinkButton
              href={repository.cloneUrl}
              variant="secondary"
              leftIcon={<Github />}
              className="grow"
            >
              Ver no github
            </LinkButton>
          </div>
          <UnderConstructionEmptyState />
        </div>
      )}
    </div>
  );
}
