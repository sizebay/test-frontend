"use server";

import { GitHubRepoDetailsProps } from "@/types/github";
import { unstable_cache } from "next/cache";

export const fetchRepoDetails = unstable_cache(
  async (
    owner: string,
    repo: string
  ): Promise<GitHubRepoDetailsProps> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${encodeURIComponent(
          owner
        )}/${encodeURIComponent(repo)}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "sizebay-app",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch repository details: ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
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
