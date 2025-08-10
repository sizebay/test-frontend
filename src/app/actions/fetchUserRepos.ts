import { api } from "@/services/api";
import { GitHubRepoProps } from "@/types/github";

export interface ReposResponse {
  data: GitHubRepoProps[];
  totalCount: number;
}

export async function fetchUserRepos(
  username: string,
  page = 1,
  perPage = 12
): Promise<ReposResponse> {
  if (!username) return { data: [], totalCount: 0 };

  const [reposRes, userRes] = await Promise.all([
    api.get(
      `/users/${encodeURIComponent(
        username
      )}/repos?sort=updated&per_page=${perPage}&page=${page}`
    ),
    api.get(`/users/${encodeURIComponent(username)}`),
  ]);

  if (reposRes.status !== 200 || userRes.status !== 200) {
    throw new Error("Failed to fetch user repositories");
  }

  return {
    data: reposRes.data,
    totalCount: userRes.data.public_repos,
  };
}
