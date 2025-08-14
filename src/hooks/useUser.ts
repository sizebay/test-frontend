import { fetchUser } from "@/app/actions/fetchUser";
import { GitHubUserProps } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export function useUser(username: string) {
  return useQuery<GitHubUserProps | null, Error>({
    queryKey: ["user", username],
    queryFn: () => fetchUser(username),
    enabled: Boolean(username),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
