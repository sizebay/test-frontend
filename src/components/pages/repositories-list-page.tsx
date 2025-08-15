import { Suspense } from "react";

import { AsyncSearchParams } from "@/types";
import { GithubRepositoriesMapper } from "@/mappers";
import { HTTPClient } from "@/infra";
import { ListRepositoriesService } from "@/services";

import { Page, PageBody } from "../atoms";
import { SearchInput } from "../organisms";
import { RepositoriesList, SkeletonRepositoriesList } from "../templates";
import { SearchUserEmptyState, UserNotFoundEmptyState } from "../molecules";

type RepositoriesListPage = {
  searchParams: AsyncSearchParams;
};

export async function RepositoriesListPage(props: RepositoriesListPage) {
  const searchParams = await props.searchParams.searchParams;
  const search = searchParams?.search || "";

  const httpClient = HTTPClient.create();
  const listRepositoriesService = new ListRepositoriesService(httpClient);
  const repositories = await listRepositoriesService.exec(search);

  return (
    <Page>
      <PageBody>
        <SearchInput />
        {!search && <SearchUserEmptyState />}
        <Suspense
          key={searchParams?.search}
          fallback={<SkeletonRepositoriesList />}
        >
          <RepositoriesList
            repositories={GithubRepositoriesMapper.toFrontend(repositories)}
          />
        </Suspense>
      </PageBody>
    </Page>
  );
}
