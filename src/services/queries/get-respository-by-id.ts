import { api } from "@/services/api";
import { RepositoryProps } from "@/types/repository";

export async function getGithubRepositoryById(
  username: string,
  repositoryId: string
): Promise<RepositoryProps> {
  const response = await api.get(`/repos/${username}/${repositoryId}`);

  return response.data;
}
