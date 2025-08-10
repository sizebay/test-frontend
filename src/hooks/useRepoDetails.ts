import { useQuery } from "@tanstack/react-query";
import { GitHubRepoDetailsProps } from "@/types/github";
import { fetchRepoDetails } from "@/app/actions/fetchRepoDetails";

export function useRepoDetails(owner: string, repo: string) {
  return useQuery<GitHubRepoDetailsProps, Error>({
    queryKey: ["repo", owner, repo],
    queryFn: () => fetchRepoDetails(owner, repo),
    enabled: Boolean(owner && repo),
  });
}
