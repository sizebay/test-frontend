import { IGetGithubRepostoryDTO } from "@/DTOs";
import { HTTPMethod, TDefaultResponse, type IHTTPClient } from "@/infra";
import { RequestParams } from "@/types";

export type IGetRepositoriesService = {
  exec: () => Promise<TDefaultResponse<Array<IGetGithubRepostoryDTO>>>;
};

export class GetRepositoriesService implements IGetRepositoriesService {
  constructor(
    private readonly httpClient: IHTTPClient,
    private readonly serviceParams: RequestParams & { token?: string }
  ) {}

  public async exec() {
    const { page = 1, perPage = 10, search, token } = this.serviceParams;
    if (!search) return { data: [], error: null, headers: {} };

    const response = await this.httpClient.sendRequest<
      Array<IGetGithubRepostoryDTO>
    >({
      endpoint: `/users/${search}/repos`,
      method: HTTPMethod.GET,
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
      params: {
        per_page: perPage,
        page,
      },
    });

    return response;
  }
}
