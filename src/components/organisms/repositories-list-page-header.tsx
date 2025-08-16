"use client";

import { useSession } from "next-auth/react";

import { PageHeader, PageTitle } from "../atoms";
import { GithubSignOutButton, GoBackButton } from "../molecules";

export function RepositoriesListPageHeader() {
  const { data } = useSession();
  return (
    <PageHeader>
      <GoBackButton className="self-start">
        <PageTitle>Repositórios</PageTitle>
      </GoBackButton>
      {data?.user && <GithubSignOutButton className="w-full lg:w-fit" />}
    </PageHeader>
  );
}
