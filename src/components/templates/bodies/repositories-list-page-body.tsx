import { GithubRepositoriesMapper } from "@/utils";
import { HTTPStatus } from "@/infra";
import { IGetRepositoriesService } from "@/services";

import { RepositoriesList, RepositoriesListPagination } from "../../organisms";
import {
  SearchBox,
  UserNotFoundEmptyState,
  UserSearchEmptyState,
  UserSearchErrorState,
} from "../../molecules";
import { PageBody, type PageBodyProps } from "../../atoms";

type RepositoriesListPageBodyProps = PageBodyProps & {
  getRepositoriesService: IGetRepositoriesService;
  search?: string;
};

export async function RepositoriesListPageBody({
  getRepositoriesService,
  search,
  ...props
}: RepositoriesListPageBodyProps) {
  const repositories = await getRepositoriesService.exec();

  const hasSearch = Boolean(search);
  const notFound = repositories.error?.status === HTTPStatus.NOT_FOUND;
  const hasData = Boolean(repositories.data?.length);
  const hasError = Boolean(repositories.error);

  return (
    <PageBody {...props}>
      <SearchBox />
      {!hasSearch && <UserSearchEmptyState />}
      {hasSearch && notFound && <UserNotFoundEmptyState />}
      {hasSearch && !hasError && hasData && (
        <RepositoriesList
          repositories={repositories.data!.map(
            GithubRepositoriesMapper.toFrontend
          )}
        />
      )}
      <RepositoriesListPagination links={repositories.headers.link} />
    </PageBody>
  );
}

type RepositoriesListPageErrorBodyProps = PageBodyProps & {
  onReset: VoidFunction;
};

export async function RepositoriesListErrorPageBody({
  onReset,
  ...props
}: RepositoriesListPageErrorBodyProps) {
  return (
    <PageBody {...props}>
      <SearchBox />
      <UserSearchErrorState onReset={onReset} />
    </PageBody>
  );
}
