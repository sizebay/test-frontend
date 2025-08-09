import { GitHubRepoDetails } from "@/types/github";
import { GitHubRepo } from "@/types/github";

const BASE_URL = "https://api.github.com";

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
};

export async function fetchUserRepos(
  username: string,
  page = 1,
  perPage = 10
): Promise<GitHubRepo[]> {
  if (!username) return [];
  const res = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(
      username
    )}/repos?sort=updated&per_page=${perPage}&page=${page}`,
    {
      headers,
    }
  );
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(
      `GitHub API error (${res.status}): ${txt || res.statusText}`
    );
  }
  return res.json();
}

export async function fetchRepoDetails(
  owner: string,
  repo: string
): Promise<GitHubRepoDetails> {
  const res = await fetch(
    `${BASE_URL}/repos/${encodeURIComponent(
      owner
    )}/${encodeURIComponent(repo)}`,
    { headers }
  );
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(
      `GitHub API error (${res.status}): ${txt || res.statusText}`
    );
  }
  return res.json();
}
