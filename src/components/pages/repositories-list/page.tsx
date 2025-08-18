"use server";

import { Suspense } from "react";

import { AsyncSearchParams } from "@/types";
import { GithubHTTPClient } from "@/infra";
import { GetRepositoriesService } from "@/services";

import { Page, PageBody, PageProps } from "../../atoms";
import {
  RepositoriesListPageHeader,
  RepositoriesListSkeleton,
} from "../../molecules";
import { RepositoriesListPageBody } from "../../templates";

import { getSession } from "@/next-auth";

type RepositoriesListPage = PageProps & AsyncSearchParams;

export async function RepositoriesListPage({
  searchParams,
  ...props
}: RepositoriesListPage) {
  const session = await getSession();
  const { search, page } = await searchParams;
  const githubHttpClient = new GithubHTTPClient();
  const getRepositoriesService = new GetRepositoriesService(githubHttpClient, {
    page,
    search,
    token: session?.accessToken,
  });

  return (
    <Page key={Math.random()} {...props}>
      <RepositoriesListPageHeader />
      <PageBody>
        <Suspense fallback={<RepositoriesListSkeleton />}>
          <RepositoriesListPageBody
            getRepositoriesService={getRepositoriesService}
            search={search}
          />
        </Suspense>
      </PageBody>
    </Page>
  );
}
