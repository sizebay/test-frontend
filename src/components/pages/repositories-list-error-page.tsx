"use client";

import { ErrorPageParams } from "@/types";

import { Page, PageBody } from "../atoms";
import { UserErrorEmptyState } from "../molecules";
import { RepositoriesListPageHeader, SearchInput } from "../organisms";

export function RepositoriesListErrorPage({ reset }: ErrorPageParams) {
  return (
    <Page>
      <RepositoriesListPageHeader />
      <PageBody>
        <SearchInput />
        <UserErrorEmptyState onReset={() => reset()} />
      </PageBody>
    </Page>
  );
}
