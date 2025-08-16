"use client";

import { ErrorPageParams } from "@/types";

import { Page, PageBody } from "../atoms";
import { UserErrorEmptyState } from "../molecules";
import { RepositoriesListPageHeader, SearchBox } from "../organisms";

export function RepositoriesListErrorPage({ reset }: ErrorPageParams) {
  return (
    <Page>
      <RepositoriesListPageHeader />
      <PageBody>
        <SearchBox />
        <UserErrorEmptyState onReset={() => reset()} />
      </PageBody>
    </Page>
  );
}
