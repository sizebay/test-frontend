"use server";

import { Suspense } from "react";

import { getRepositoryById } from "@/actions";
import { GithubHTTPClient } from "@/infra";
import { AsyncDynamicParams } from "@/types";
import { getSession } from "@/next-auth";

import { Page, PageBody } from "../atoms";
import { RepositoryDetailPageHeader } from "../organisms";
import { RepositoryDetails } from "../templates";
import { SkeletonRepositoryDetail } from "../molecules";

export async function RepositoryDetailPage({
  params,
}: AsyncDynamicParams<{ userName: string; repositoryName: string }>) {
  const { repositoryName, userName } = await params;
  const githubHttpClient = new GithubHTTPClient();
  const session = await getSession();

  return (
    <Page key={Math.random()}>
      <RepositoryDetailPageHeader />
      <PageBody>
        <Suspense fallback={<SkeletonRepositoryDetail />}>
          <RepositoryDetails
            getRepositoryById={getRepositoryById}
            httpClient={githubHttpClient}
            requestParams={{
              repositoryName,
              userName,
              token: session?.accessToken,
            }}
          />
        </Suspense>
      </PageBody>
    </Page>
  );
}
