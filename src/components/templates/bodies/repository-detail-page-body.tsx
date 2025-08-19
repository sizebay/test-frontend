import { HTTPStatus } from "@/infra";
import {
  IGetRepositoryByIdService,
  IGetRepositoryLanguagesService,
} from "@/services";
import {
  GithubRepositoriesMapper,
  GithubRepositoryLanguagesMapper,
} from "@/utils";

import {
  RepositoryErrorState,
  RepositoryLanguages,
  RepositoryLanguagesEmptyState,
  RepositoryNotFoundEmptyState,
  UnderConstructionEmptyState,
} from "../../molecules";
import { PageBody, PageBodyProps } from "../../atoms";
import { RepositoryDetail } from "../../organisms";

type RepositoryDetailrops = PageBodyProps & {
  getRepositoryByIdService: IGetRepositoryByIdService;
  getRepositoryLanguagesService: IGetRepositoryLanguagesService;
};

export async function RepositoryDetailPageBody({
  getRepositoryByIdService,
  getRepositoryLanguagesService,
  ...props
}: RepositoryDetailrops) {
  const repository = await getRepositoryByIdService.exec();
  const repositoryLanguages = await getRepositoryLanguagesService.exec();

  const repositoryNotFound = repository.error?.status === HTTPStatus.NOT_FOUND;
  const hasRepository = Boolean(repository.data);
  const hasRepositoryError = Boolean(repository.error);

  const repositoryLanguagesNotFound =
    repository.error?.status === HTTPStatus.NOT_FOUND;
  const hasRepositoryLanguages = Boolean(repository.data);
  const hasRepositoryLanguagesError = Boolean(repository.error);

  return (
    <PageBody {...props}>
      <div className="flex flex-col gap-4 w-full" {...props}>
        {repositoryNotFound && <RepositoryNotFoundEmptyState />}
        {hasRepository && !hasRepositoryError && (
          <RepositoryDetail
            repository={GithubRepositoriesMapper.toFrontend(repository.data!)}
          />
        )}
        {repositoryLanguagesNotFound && <RepositoryLanguagesEmptyState />}
        {hasRepositoryLanguages && !hasRepositoryLanguagesError && (
          <RepositoryLanguages
            languages={
              GithubRepositoryLanguagesMapper.toFrontend(
                repositoryLanguages.data!
              ).languages
            }
          />
        )}
        <UnderConstructionEmptyState />
      </div>
    </PageBody>
  );
}

type RepositoryDetailPageErrorBodyProps = PageBodyProps & {
  onReset: VoidFunction;
};

export async function RepositoryDetailErrorPageBody({
  onReset,
  ...props
}: RepositoryDetailPageErrorBodyProps) {
  return (
    <PageBody {...props}>
      <RepositoryErrorState onReset={onReset} />
    </PageBody>
  );
}
