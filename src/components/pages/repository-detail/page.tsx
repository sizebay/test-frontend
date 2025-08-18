"use server";

import { Suspense } from "react";

import {
  GetRepositoryByIdService,
  GetRepositoryLanguagesService,
} from "@/services";
import { GithubHTTPClient } from "@/infra";
import { AsyncDynamicParams } from "@/types";
import { getSession } from "@/next-auth";

import { Page, PageBody } from "../../atoms";
import {
  RepositoryDetailPageHeader,
  RepositorySummarySkeleton,
} from "../../molecules";
import { RepositoryDetailPageBody } from "../../templates";

type RepositoryDetailPageProps = AsyncDynamicParams<{
  userName: string;
  repositoryName: string;
}>;

export async function RepositoryDetailPage({
  params,
}: RepositoryDetailPageProps) {
  const { repositoryName, userName } = await params;
  const session = await getSession();

  const servicesInput = {
    repositoryName,
    userName,
    token: session?.accessToken,
  };
  const githubHttpClient = new GithubHTTPClient();
  const getRepositoryByIdService = new GetRepositoryByIdService(
    githubHttpClient,
    servicesInput
  );
  const getRepositoryLanguagesService = new GetRepositoryLanguagesService(
    githubHttpClient,
    servicesInput
  );

  return (
    <Page key={Math.random()}>
      <RepositoryDetailPageHeader />
      <PageBody>
        <Suspense fallback={<RepositorySummarySkeleton />}>
          <RepositoryDetailPageBody
            getRepositoryByIdService={getRepositoryByIdService}
            getRepositoryLanguagesService={getRepositoryLanguagesService}
          />
        </Suspense>
      </PageBody>
    </Page>
  );
}
