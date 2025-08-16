"use server";

import { Suspense } from "react";

import { AsyncSearchParams } from "@/types";
import { HTTPClient } from "@/infra";
import { ListRepositoriesService } from "@/services";

import { Page, PageBody } from "../atoms";
import { RepositoriesListPageHeader, SearchBox } from "../organisms";
import { RepositoriesList, SkeletonRepositoriesList } from "../templates";

type RepositoriesListPage = {
  searchParams: AsyncSearchParams;
};

export async function RepositoriesListPage(props: RepositoriesListPage) {
  const httpClient = HTTPClient.create();
  const listRepositoriesService = new ListRepositoriesService(httpClient);

  return (
    <Page key={Math.random()}>
      <RepositoriesListPageHeader />
      <PageBody>
        <SearchBox />
        <Suspense fallback={<SkeletonRepositoriesList />}>
          <RepositoriesList
            repositoriesService={listRepositoriesService}
            searchParams={props.searchParams}
          />
        </Suspense>
      </PageBody>
    </Page>
  );
}
