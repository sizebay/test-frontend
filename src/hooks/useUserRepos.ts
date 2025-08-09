import { fetchUserRepos } from "@/app/actions/fetchUserRepos";
import { GitHubRepoProps } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export function useUserRepos(
  username: string,
  page = 1,
  perPage = 10
) {
  const query = useQuery<GitHubRepoProps[], Error>({
    queryKey: ["repos", username, page, perPage],
    queryFn: () => fetchUserRepos(username, page, perPage),
    enabled: Boolean(username),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const hasNextPage = (query.data?.length ?? 0) === perPage;
  const hasPrevPage = page > 1;

  return { ...query, hasNextPage, hasPrevPage };
}
