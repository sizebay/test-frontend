"use server";

import { Suspense } from "react";

import { GetRepositoryByIdService } from "@/services";
import { GithubHTTPClient } from "@/infra";
import { AsyncDynamicParams } from "@/types";
import { getSession } from "@/next-auth";

import { Page } from "../../atoms";
import {
  RepositoryDetailPageHeader,
  RepositoryDetailSkeleton,
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
  const githubHttpClient = new GithubHTTPClient();
  const session = await getSession();
  const getRepositoryByIdService = new GetRepositoryByIdService(
    githubHttpClient,
    {
      repositoryName,
      userName,
      token: session?.accessToken,
    }
  );

  return (
    <Page key={Math.random()}>
      <RepositoryDetailPageHeader />
      <Suspense fallback={<RepositoryDetailSkeleton />}>
        <RepositoryDetailPageBody
          getRepositoryByIdService={getRepositoryByIdService}
        />
      </Suspense>
    </Page>
  );
}
