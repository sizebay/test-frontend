import { QueryClient } from "@tanstack/react-query";
import { fetchUserRepos } from "@/app/actions/fetchUserRepos";
import { fetchRepoDetails } from "@/app/actions/fetchRepoDetails";

// Create a new QueryClient instance for server-side prefetching
const serverQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

export async function prefetchUserRepos(
  username: string,
  page = 1,
  perPage = 12
) {
  if (!username) return;

  await serverQueryClient.prefetchQuery({
    queryKey: ["repos", username, page, perPage],
    queryFn: () => fetchUserRepos(username, page, perPage),
  });
}

export async function prefetchRepoDetails(
  owner: string,
  repo: string
) {
  if (!owner || !repo) return;

  await serverQueryClient.prefetchQuery({
    queryKey: ["repo", owner, repo],
    queryFn: () => fetchRepoDetails(owner, repo),
  });
}

// Export the server query client for hydration
export { serverQueryClient };
