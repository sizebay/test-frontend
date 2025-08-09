import { api } from "@/services/api";
import { GitHubRepoProps } from "@/types/github";

export async function fetchUserRepos(
  username: string,
  page = 1,
  perPage = 10
): Promise<GitHubRepoProps[]> {
  if (!username) return [];

  const res = await api.get(
    `/users/${encodeURIComponent(
      username
    )}/repos?sort=updated&per_page=${perPage}&page=${page}`
  );

  if (res.status !== 200) {
    throw new Error("Failed to fetch user repositories");
  }

  return res.data;
}
