"use client";

import { ErrorPageParams } from "@/types";

import { Page, PageBody } from "../atoms";
import { UserRepositoryErrorEmptyState } from "../molecules";
import { RepositoryDetailPageHeader, SearchBox } from "../organisms";

export function RepositoryDetailErrorPage({ reset }: ErrorPageParams) {
  return (
    <Page>
      <RepositoryDetailPageHeader />
      <PageBody>
        <SearchBox />
        <UserRepositoryErrorEmptyState onReset={() => reset()} />
      </PageBody>
    </Page>
  );
}
