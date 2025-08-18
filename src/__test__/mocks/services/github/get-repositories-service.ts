import { IGetRepositoriesService } from "@/services";

import { makeFakeGithubRepositories } from "../../factories";
import { HTTPStatus, TError } from "@/infra";

import { makeFakeGithubUserDTO } from "../../factories";
import { IGetGithubRepostoryDTO } from "@/DTOs";
import { AxiosResponseHeaders } from "axios";

export class GetRepositoriesMockService implements IGetRepositoriesService {
  constructor(
    private readonly serviceParams: {
      search?: string;
      repositoriesCount?: number;
      defaultRepositories?: Array<IGetGithubRepostoryDTO>;
      error?: TError;
    }
  ) {}

  public async exec() {
    const {
      search,
      error,
      repositoriesCount = 5,
      defaultRepositories,
    } = this.serviceParams;

    if (!search) return { data: [], error: null, headers: {} };
    if (error)
      return {
        data: [],
        headers: {},
        error,
      };

    const repositories =
      defaultRepositories ??
      makeFakeGithubRepositories(repositoriesCount, {
        ...makeFakeGithubUserDTO(),
        login: search,
      });

    const userRepositories = repositories.filter(
      (repo) => repo.owner.login === search
    );

    if (userRepositories.length > 0) {
      return { data: userRepositories, error: null, headers: {} };
    }

    return {
      data: [],
      headers: {},
      error: {
        status: HTTPStatus.NOT_FOUND,
        message: `Usuário ${search} não encontrado`,
      },
    };
  }
}
