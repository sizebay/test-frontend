import { render, screen } from "@testing-library/react";

import {
  getRepositoriesMock,
  MOCK_GITHUB_USER_NAME,
  WRONG_MOCK_GITHUB_USER_NAME,
} from "@/__test__/mocks";
import { RepositoriesList } from "@/components";
import { GithubHTTPClient } from "@/infra";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
  })),
  usePathname: jest.fn(() => "/"),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}));

describe("RepositoriesList", () => {
  it("Deve exibir estado de busca não realizado", async () => {
    const githubHttpClient = new GithubHTTPClient();
    render(
      await RepositoriesList({
        getRepositoriesAction: getRepositoriesMock,
        httpClient: githubHttpClient,
        requestParams: { search: "" },
      })
    );

    expect(screen.getByTestId("search-user-empty-state")).toBeInTheDocument();
  });

  it("Deve exibir estado de usuário não encontrado", async () => {
    const githubHttpClient = new GithubHTTPClient();
    render(
      await RepositoriesList({
        getRepositoriesAction: getRepositoriesMock,
        httpClient: githubHttpClient,
        requestParams: { search: WRONG_MOCK_GITHUB_USER_NAME },
      })
    );

    expect(
      screen.getByTestId("user-not-found-empty-state")
    ).toBeInTheDocument();
  });

  it("Deve exibir repositorios", async () => {
    const githubHttpClient = new GithubHTTPClient();
    render(
      await RepositoriesList({
        getRepositoriesAction: getRepositoriesMock,
        httpClient: githubHttpClient,
        requestParams: { search: MOCK_GITHUB_USER_NAME },
      })
    );

    const repositoriesCards = screen.getAllByTestId("repository-card");
    expect(repositoriesCards.length).toBe(5);
  });
});
