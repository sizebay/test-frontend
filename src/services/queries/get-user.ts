import { api } from "@/services/api";
import { UserProps } from "@/types/user";

export async function getGithubUser(username: string): Promise<UserProps> {
  console.log("getGithubUser - username:", username);
  const response = await api.get(`/users/${username}`);

  return response.data;
}
