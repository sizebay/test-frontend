import {
  fetchUserRepos,
  ReposResponse,
} from "@/app/actions/fetchUserRepos";
import { useQuery } from "@tanstack/react-query";

export function useUserRepos(
  username: string,
  page = 1,
  perPage = 12
) {
  const query = useQuery<ReposResponse, Error>({
    queryKey: ["repos", username, page, perPage],
    queryFn: () => fetchUserRepos(username, page, perPage),
    enabled: Boolean(username),
  });

  const totalPages = Math.ceil(
    (query.data?.totalCount ?? 0) / perPage
  );
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  return {
    ...query,
    data: query.data?.data,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };
}
