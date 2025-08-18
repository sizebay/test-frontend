import { render, screen } from "@testing-library/react";

import {
  GetRepositoriesMockService,
  makeFakeGithubRepositories,
  makeFakeGithubUserDTO,
  MOCK_GITHUB_USER_NAME,
  WRONG_MOCK_GITHUB_USER_NAME,
} from "@/__test__/mocks";
import { RepositoriesListPageBody } from "@/components";

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
    const getRepositoriesMockService = new GetRepositoriesMockService({
      search: "",
    });

    render(
      await RepositoriesListPageBody({
        getRepositoriesService: getRepositoriesMockService,
        search: "",
      })
    );

    expect(screen.getByTestId("search-user-empty-state")).toBeInTheDocument();
  });

  it("Deve exibir estado de usuário não encontrado", async () => {
    const getRepositoriesMockService = new GetRepositoriesMockService({
      search: WRONG_MOCK_GITHUB_USER_NAME,
      defaultRepositories: makeFakeGithubRepositories(
        5,
        makeFakeGithubUserDTO()
      ),
    });

    render(
      await RepositoriesListPageBody({
        getRepositoriesService: getRepositoriesMockService,
        search: WRONG_MOCK_GITHUB_USER_NAME,
      })
    );

    expect(
      screen.getByTestId("user-not-found-empty-state")
    ).toBeInTheDocument();
  });

  it("Deve exibir repositorios", async () => {
    const getRepositoriesMockService = new GetRepositoriesMockService({
      search: MOCK_GITHUB_USER_NAME,
      repositoriesCount: 5,
    });

    render(
      await RepositoriesListPageBody({
        getRepositoriesService: getRepositoriesMockService,
        search: MOCK_GITHUB_USER_NAME,
      })
    );

    const repositoriesCards = screen.getAllByTestId("repository-card");
    expect(repositoriesCards.length).toBe(5);
  });
});
