import { faker } from "@faker-js/faker";

import { IGetGithubUserDTO } from "@/DTOs";

import { MOCK_GITHUB_USER_NAME } from "./mock_github_user_name";

export function makeFakeGithubUserDTO(): IGetGithubUserDTO {
  const login = MOCK_GITHUB_USER_NAME;

  return {
    login,
    id: faker.number.int({ min: 1, max: 999999 }),
    node_id: faker.string.uuid(),
    avatar_url: faker.image.avatar(),
    gravatar_id: "",
    url: faker.internet.url(),
    html_url: `https://github.com/${login}`,
    followers_url: faker.internet.url(),
    following_url: faker.internet.url(),
    gists_url: faker.internet.url(),
    starred_url: faker.internet.url(),
    subscriptions_url: faker.internet.url(),
    organizations_url: faker.internet.url(),
    repos_url: `https://api.github.com/users/${login}/repos`,
    events_url: faker.internet.url(),
    received_events_url: faker.internet.url(),
    type: "User",
    user_view_type: "public",
    site_admin: false,
    name: faker.person.fullName(),
    company: faker.company.name(),
    blog: faker.internet.url(),
    location: faker.location.city(),
    email: faker.internet.email(),
    hireable: faker.datatype.boolean(),
    bio: faker.lorem.sentence(),
    twitter_username: faker.internet.username(),
    public_repos: faker.number.int({ min: 0, max: 200 }),
    public_gists: faker.number.int({ min: 0, max: 50 }),
    followers: faker.number.int({ min: 0, max: 10000 }),
    following: faker.number.int({ min: 0, max: 5000 }),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.recent().toISOString(),
  };
}
