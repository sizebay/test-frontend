import { RepositoriesListPage } from "@/components";
import { AsyncSearchParams } from "@/types";

export default async function Page(props: AsyncSearchParams) {
  return <RepositoriesListPage {...props} />;
}
