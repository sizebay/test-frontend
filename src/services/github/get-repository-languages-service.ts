import { IGetGithubRepostoryLanguagesDTO } from "@/DTOs";
import { HTTPMethod, TDefaultResponse, type IHTTPClient } from "@/infra";

export type IGetRepositoryLanguagesService = {
  exec: () => Promise<TDefaultResponse<IGetGithubRepostoryLanguagesDTO>>;
};

export class GetRepositoryLanguagesService
  implements IGetRepositoryLanguagesService
{
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

    const response =
      await this.httpClient.sendRequest<IGetGithubRepostoryLanguagesDTO>({
        endpoint: `/repos/${userName}/${repositoryName}/languages`,
        method: HTTPMethod.GET,
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    return response;
  }
}
