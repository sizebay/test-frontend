import { IGetGithubRepostoryDTO } from "@/DTOs";
import { HTTPMethod, TDefaultResponse, type IHTTPClient } from "@/infra";

interface GetRepositoryByIdConfig {
  httpClient: IHTTPClient;
  options: { token?: string; userName: string; repositoryName: string };
}

export type IGetRepositoryByIdAction = (
  params: GetRepositoryByIdConfig
) => Promise<TDefaultResponse<IGetGithubRepostoryDTO>>;

export const getRepositoryById: IGetRepositoryByIdAction = async ({
  httpClient,
  options,
}) => {
  const { token, repositoryName, userName } = options;
  const response = await httpClient.sendRequest<IGetGithubRepostoryDTO>({
    endpoint: `/repos/${userName}/${repositoryName}`,
    method: HTTPMethod.GET,
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return response;
};
