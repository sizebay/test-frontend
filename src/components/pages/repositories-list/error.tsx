"use client";

import { ErrorPageParams } from "@/types";

import { RepositoriesListPageHeader } from "../../molecules";
import { RepositoriesListErrorPageBody } from "../../templates";
import { Page } from "../../atoms";

export function RepositoriesListErrorPage({ reset }: ErrorPageParams) {
  return (
    <Page>
      <RepositoriesListPageHeader />
      <RepositoriesListErrorPageBody onReset={reset} />
    </Page>
  );
}
