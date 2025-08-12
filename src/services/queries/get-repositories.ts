import { api } from "@/services/api";
import { RepositoryProps } from "@/types/repository";

export async function getGithubRepositories(
  username: string
): Promise<RepositoryProps[]> {
  console.log("getGithubRepositories - username:", username);
  const response = await api.get(`/users/${username}/repos`);
  console.log("getGithubRepositories", response.data);
  return response.data;
}
