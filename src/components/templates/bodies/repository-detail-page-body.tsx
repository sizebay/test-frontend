import { HTTPStatus } from "@/infra";
import { IGetRepositoryByIdService } from "@/services";
import { GithubRepositoriesMapper } from "@/utils";

import {
  RepositoryErrorState,
  RepositoryNotFoundEmptyState,
} from "../../molecules";
import { PageBody, PageBodyProps } from "../../atoms";
import { RepositoryDetail } from "../../organisms";

type RepositoryDetailrops = PageBodyProps & {
  getRepositoryByIdService: IGetRepositoryByIdService;
};

export async function RepositoryDetailPageBody({
  getRepositoryByIdService,
  ...props
}: RepositoryDetailrops) {
  const repository = await getRepositoryByIdService.exec();

  const notFound = repository.error?.status === HTTPStatus.NOT_FOUND;
  const hasData = Boolean(repository.data);
  const hasError = Boolean(repository.error);

  return (
    <PageBody {...props}>
      {notFound && <RepositoryNotFoundEmptyState />}
      {!hasError && hasData && (
        <RepositoryDetail
          repository={GithubRepositoriesMapper.toFrontend(repository.data!)}
        />
      )}
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
