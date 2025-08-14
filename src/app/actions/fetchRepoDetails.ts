"use server";

import { api } from "@/services/api";
import { GitHubRepoDetailsProps } from "@/types/github";
import { unstable_cache } from "next/cache";

export const fetchRepoDetails = unstable_cache(
  async (
    owner: string,
    repo: string
  ): Promise<GitHubRepoDetailsProps> => {
    try {
      const response = await api.get(
        `https://api.github.com/repos/${encodeURIComponent(
          owner
        )}/${encodeURIComponent(repo)}`
      );

      if (response.status !== 200) {
        throw new Error(
          `Failed to fetch repository details: ${response.statusText}`
        );
      }

      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to fetch repository details for ${owner}/${repo}: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  },
  ["repo-details"],
  {
    revalidate: 300, // 5 minutes
    tags: ["repo-details"],
  }
);
