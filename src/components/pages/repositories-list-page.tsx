import { Page, PageBody } from "../atoms";
import { SearchInput } from "../organisms";
import { RepositoriesList } from "../templates";

export async function RepositoriesListPage() {
  return (
    <Page>
      <PageBody>
        <SearchInput />
        <RepositoriesList />
      </PageBody>
    </Page>
  );
}
