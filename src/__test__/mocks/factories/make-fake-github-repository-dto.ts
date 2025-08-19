import { faker } from "@faker-js/faker";

import { IGetGithubRepostoryDTO, IGetGithubUserDTO } from "@/DTOs";
import { TGithubRepositoryVisibility } from "@/types";

export function makeFakeGithubRepositoryDTO(
  fakeUser: IGetGithubUserDTO
): IGetGithubRepostoryDTO {
  const repoName = faker.lorem.word().toLowerCase();

  return {
    id: faker.number.int({ min: 1, max: 999999 }),
    name: repoName,
    owner: fakeUser,
    description: faker.lorem.sentence(),
    url: faker.internet.url(),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.recent().toISOString(),
    git_url: `git://github.com/${fakeUser.login}/${repoName}.git`,
    ssh_url: `git@github.com:${fakeUser.login}/${repoName}.git`,
    clone_url: `https://github.com/${fakeUser.login}/${repoName}.git`,
    stargazers_count: faker.number.int({ min: 0, max: 10000 }),
    watchers_count: faker.number.int({ min: 0, max: 10000 }),
    language: faker.helpers.arrayElement([
      "TypeScript",
      "JavaScript",
      "Python",
      "Go",
      null,
    ]),
    forks_count: faker.number.int({ min: 0, max: 5000 }),
    open_issues_count: faker.number.int({ min: 0, max: 500 }),
    visibility: faker.helpers.arrayElement([
      "public",
      "private",
    ]) as TGithubRepositoryVisibility,
    forks: faker.number.int({ min: 0, max: 5000 }),
    default_branch: "main",
  };
}
