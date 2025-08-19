import { IGetGithubRepostoryDTO, IGetGithubUserDTO } from "@/DTOs";

import { makeFakeGithubRepositoryDTO } from "./make-fake-github-repository-dto";

export function makeFakeGithubRepositories(
  count: number,
  fakeUser: IGetGithubUserDTO
): Array<IGetGithubRepostoryDTO> {
  return Array.from({ length: count }, () =>
    makeFakeGithubRepositoryDTO(fakeUser)
  );
}
