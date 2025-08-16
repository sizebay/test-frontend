import { notFound } from "next/navigation";
import { getSession } from "@/next-auth";

import { AsyncSearchParams } from "@/types";
import { IListRepositoriesService } from "@/services";

import { RepositoryCard } from "../organisms";
import { GithubRepositoriesMapper } from "@/mappers";
import { SearchUserEmptyState } from "../molecules";

type RepositoriesListProps = {
  repositoriesService: IListRepositoriesService;
  searchParams: AsyncSearchParams;
};

export async function RepositoriesList({
  repositoriesService,
  searchParams: { searchParams },
}: RepositoriesListProps) {
  const search = await searchParams;
  const session = await getSession();

  const repositories = await repositoriesService.exec(
    search?.search || "",
    session?.accessToken
  );

  if (repositories.error?.status === 404) {
    return notFound();
  }

  if (!search?.search) return <SearchUserEmptyState />;

  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repositories.data?.map((repository) => (
        <RepositoryCard
          key={repository.id}
          repository={GithubRepositoriesMapper.toFrontend(repository)}
        />
      ))}
    </div>
  );
}
