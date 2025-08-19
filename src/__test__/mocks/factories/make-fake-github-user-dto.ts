import { faker } from "@faker-js/faker";

import { IGetGithubUserDTO } from "@/DTOs";

import { MOCK_GITHUB_USER_NAME } from "./mock-github-user-name";

export function makeFakeGithubUserDTO(
  userName = MOCK_GITHUB_USER_NAME
): IGetGithubUserDTO {
  return {
    login: userName,
    id: faker.number.int({ min: 1, max: 999999 }),
  };
}
