import { RepositoriesListPage } from "@/components";
import { AsyncSearchParams } from "@/types";

export default async function Home(props: AsyncSearchParams) {
  return <RepositoriesListPage searchParams={props} />;
}
