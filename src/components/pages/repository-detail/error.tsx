import { RepositoryDetailPageHeader } from "../../molecules";
import { RepositoryDetailErrorPageBody } from "../../templates";
import { Page } from "../../atoms";

import { ErrorPageParams } from "@/types";

export function RepositoryDetailErrorPage({ reset }: ErrorPageParams) {
  return (
    <Page>
      <RepositoryDetailPageHeader />
      <RepositoryDetailErrorPageBody onReset={reset} />
    </Page>
  );
}
