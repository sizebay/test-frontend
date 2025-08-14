import { api } from "@/services/api";
import { GitHubUserProps } from "@/types/github";

export async function fetchUser(
  username: string
): Promise<GitHubUserProps | null> {
  if (!username) return null;

  const response = await api.get(
    `/users/${encodeURIComponent(username)}`
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch user");
  }

  return response.data;
}
