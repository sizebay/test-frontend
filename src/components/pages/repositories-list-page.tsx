"use server";

import { Suspense } from "react";

import { AsyncSearchParams } from "@/types";
import { GithubHTTPClient } from "@/infra";

import { Page, PageBody } from "../atoms";
import { RepositoriesListPageHeader } from "../organisms";
import { RepositoriesList, SkeletonRepositoriesList } from "../templates";

import { getSession } from "@/next-auth";
import { getRepositories } from "@/actions";

type RepositoriesListPage = {
  searchParams: AsyncSearchParams;
};

export async function RepositoriesListPage(props: RepositoriesListPage) {
  const session = await getSession();
  const githubHttpClient = new GithubHTTPClient();
  const { search, page } = await props.searchParams.searchParams;

  return (
    <Page key={Math.random()}>
      <RepositoriesListPageHeader />
      <PageBody>
        <Suspense fallback={<SkeletonRepositoriesList />}>
          <RepositoriesList
            getRepositoriesAction={getRepositories}
            httpClient={githubHttpClient}
            requestParams={{ page, token: session?.accessToken, search }}
          />
        </Suspense>
      </PageBody>
    </Page>
  );
}
