import { useQuery } from "@tanstack/react-query";
import { fetchRepoDetails } from "@/services/github/fetchRepoDetails";

export function useGithubRepoDetails(owner: string, repo: string) {
    return useQuery({
        queryKey: ["repoDetails", owner, repo],
        queryFn: () => fetchRepoDetails(owner, repo),
        enabled: !!owner && !!repo,
    });
}
