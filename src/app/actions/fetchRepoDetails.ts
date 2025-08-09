import { api } from "@/services/api";
import { GitHubRepoDetailsProps } from "@/types/github";

export async function fetchRepoDetails(
  owner: string,
  repo: string
): Promise<GitHubRepoDetailsProps> {
  try {
    const res = await api.get(
      `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(
        repo
      )}`
    );

    return res.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch repository details for ${owner}/${repo}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
