import { IGetGithubRepostoryDTO } from "@/DTOs";

import { makeFakeGithubRepositoryDTO } from "./make-fake-github-repository-dto";

export function makeFakeGithubRepositories(
  count: number
): Array<IGetGithubRepostoryDTO> {
  return Array.from({ length: count }, () => makeFakeGithubRepositoryDTO());
}
