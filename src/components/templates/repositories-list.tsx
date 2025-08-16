import { RequestParams } from "@/types";
import { GithubRepositoriesMapper } from "@/mappers";
import { HTTPStatus, IHTTPClient } from "@/infra";

import { RepositoryCard, SearchBox } from "../organisms";
import {
  Pagination,
  SearchUserEmptyState,
  UserNotFoundEmptyState,
} from "../molecules";
import { IGetRepositoriesAction } from "@/actions";

type RepositoriesListProps = {
  getRepositoriesAction: IGetRepositoriesAction;
  httpClient: IHTTPClient;
  requestParams: RequestParams & { token?: string };
};

export async function RepositoriesList({
  getRepositoriesAction,
  httpClient,
  requestParams,
}: RepositoriesListProps) {
  const repositories = await getRepositoriesAction({
    httpClient,
    options: requestParams,
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <SearchBox />
      {!requestParams?.search && <SearchUserEmptyState />}
      {repositories.error?.status === HTTPStatus.NOT_FOUND && (
        <UserNotFoundEmptyState />
      )}

      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repositories.data?.map((repository) => (
          <RepositoryCard
            key={repository.id}
            repository={GithubRepositoriesMapper.toFrontend(repository)}
          />
        ))}
      </div>
      <Pagination totalPages={10} />
    </div>
  );
}
