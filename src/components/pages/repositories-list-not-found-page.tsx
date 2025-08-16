import { Page, PageBody } from "../atoms";
import { RepositoriesListPageHeader, SearchInput } from "../organisms";
import { UserNotFoundEmptyState } from "../molecules";

export function RepositoriesListNotFoundPage() {
  return (
    <Page>
      <RepositoriesListPageHeader />
      <PageBody>
        <SearchInput />
        <UserNotFoundEmptyState />
      </PageBody>
    </Page>
  );
}
