import { IGetGithubRepostoryDTO } from "@/DTOs";
import { HTTPMethod, TDefaultResponse, type IHTTPClient } from "@/infra";

export type IGetRepositoryByIdService = {
  exec: () => Promise<TDefaultResponse<IGetGithubRepostoryDTO>>;
};

export class GetRepositoryByIdService implements IGetRepositoryByIdService {
  constructor(
    private readonly httpClient: IHTTPClient,
    private readonly serviceParams: {
      token?: string;
      userName: string;
      repositoryName: string;
    }
  ) {}

  public async exec() {
    const { token, repositoryName, userName } = this.serviceParams;

    const response = await this.httpClient.sendRequest<IGetGithubRepostoryDTO>({
      endpoint: `/repos/${userName}/${repositoryName}`,
      method: HTTPMethod.GET,
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response;
  }
}
