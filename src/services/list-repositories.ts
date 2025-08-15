import { GetGithubRepostoryDTO } from "@/DTOs";
import { HTTPMethod, type IHTTPClient } from "@/infra";

export interface IListRepositoriesService {
  exec(username: string): Promise<Array<GetGithubRepostoryDTO>>;
}

export class ListRepositoriesService implements IListRepositoriesService {
  constructor(private readonly httpClient: IHTTPClient) {}

  async exec(username: string): Promise<Array<GetGithubRepostoryDTO>> {
    if (!username) return [];
    const data = await this.httpClient.sendRequest<
      Array<GetGithubRepostoryDTO>
    >({
      endpoint: `/users/${username}/repos`,
      method: HTTPMethod.GET,
    });
    return data;
  }
}
