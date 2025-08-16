import { Page, PageBody } from "../atoms";
import { RepositoriesListPageHeader, SearchBox } from "../organisms";
import { UserNotFoundEmptyState } from "../molecules";

export function RepositoriesListNotFoundPage() {
  return (
    <Page>
      <RepositoriesListPageHeader />
      <PageBody>
        <SearchBox />
        <UserNotFoundEmptyState />
      </PageBody>
    </Page>
  );
}
