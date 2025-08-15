import { Page, PageBody } from "../atoms";
import { SearchInput } from "../organisms";
import { UserNotFoundEmptyState } from "../molecules";

export function RepositoriesListNotFoundPage() {
  return (
    <Page>
      <PageBody>
        <SearchInput />
        <UserNotFoundEmptyState />
      </PageBody>
    </Page>
  );
}
