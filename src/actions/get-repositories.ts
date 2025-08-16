import { IGetGithubRepostoryDTO } from "@/DTOs";
import { HTTPMethod, TDefaultResponse, type IHTTPClient } from "@/infra";
import { RequestParams } from "@/types";

interface GetRepositoriesConfig {
  httpClient: IHTTPClient;
  options: RequestParams & { token?: string };
}

export type IGetRepositoriesAction = (
  params: GetRepositoriesConfig
) => Promise<TDefaultResponse<Array<IGetGithubRepostoryDTO>>>;

export const getRepositories: IGetRepositoriesAction = async ({
  httpClient,
  options,
}) => {
  const { page = 1, perPage = 10, search, token } = options;
  if (!search) return { data: [], error: null };

  const response = await httpClient.sendRequest<Array<IGetGithubRepostoryDTO>>({
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
};
