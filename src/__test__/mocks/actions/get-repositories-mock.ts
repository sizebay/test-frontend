import { IGetRepositoriesAction } from "@/actions";

import { makeFakeGithubRepositories } from "../factories";
import { HTTPStatus } from "@/infra";

export const getRepositoriesMock: IGetRepositoriesAction = async ({
  options: { search },
}) => {
  if (!search)
    return new Promise((resolve) => {
      resolve({
        data: [],
        error: null,
      });
    });

  const repositories = makeFakeGithubRepositories(5);
  const userRepositoriesIndex = repositories.findIndex(
    (repository) => repository.owner.login === search
  );

  if (userRepositoriesIndex > -1) {
    return new Promise((resolve) => {
      resolve({
        data: repositories,
        error: null,
      });
    });
  } else {
    return new Promise((resolve) => {
      resolve({
        data: [],
        error: { status: HTTPStatus.NOT_FOUND, message: "" },
      });
    });
  }
};

export const getRepositoriesLoadingMock: IGetRepositoriesAction = async () => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [],
          error: null,
        }),
      50
    )
  );
};
