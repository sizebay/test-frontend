import { GetGithubRepostoryDTO } from "@/DTOs";
import { HTTPMethod, TDefaultResponse, type IHTTPClient } from "@/infra";

export interface IListRepositoriesService {
  exec(
    username: string,
    token?: string
  ): Promise<TDefaultResponse<Array<GetGithubRepostoryDTO>>>;
}

export class ListRepositoriesService implements IListRepositoriesService {
  constructor(private readonly httpClient: IHTTPClient) {}

  async exec(
    username: string,
    token?: string
  ): Promise<TDefaultResponse<Array<GetGithubRepostoryDTO>>> {
    if (!username)
      return {
        data: [],
        error: null,
      };

    const { data, error } = await this.httpClient.sendRequest<
      Array<GetGithubRepostoryDTO>
    >({
      endpoint: `/users/${username}/repos`,
      method: HTTPMethod.GET,
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });

    return {
      data,
      error,
    };
  }
}
