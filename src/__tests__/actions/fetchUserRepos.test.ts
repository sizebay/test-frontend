import { fetchUserRepos } from "../../app/actions/fetchUserRepos";
import { api } from "@/services/api";

// Mock the api service
jest.mock("@/services/api", () => ({
  api: {
    get: jest.fn(),
  },
}));

const mockApi = api as jest.Mocked<typeof api>;

describe("fetchUserRepos", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return empty response when username is empty", async () => {
    const result = await fetchUserRepos("");

    expect(result).toEqual({
      data: [],
      totalCount: 0,
    });

    expect(mockApi.get).not.toHaveBeenCalled();
  });

  it("should return empty response when username is only whitespace", async () => {
    const result = await fetchUserRepos("   ");

    expect(result).toEqual({
      data: [],
      totalCount: 0,
    });

    expect(mockApi.get).not.toHaveBeenCalled();
  });

  it("should fetch repositories and user data successfully", async () => {
    const mockRepos = [
      {
        id: 1,
        name: "repo1",
        full_name: "user/repo1",
        description: "Test repository 1",
        html_url: "https://github.com/user/repo1",
        stargazers_count: 10,
        language: "TypeScript",
        updated_at: "2024-01-01T00:00:00Z",
        fork: false,
      },
      {
        id: 2,
        name: "repo2",
        full_name: "user/repo2",
        description: "Test repository 2",
        html_url: "https://github.com/user/repo2",
        stargazers_count: 5,
        language: "JavaScript",
        updated_at: "2024-01-02T00:00:00Z",
        fork: true,
      },
    ];

    const mockUser = {
      login: "testuser",
      public_repos: 25,
      name: "Test User",
    };

    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: mockRepos })
      .mockResolvedValueOnce({ status: 200, data: mockUser });

    const result = await fetchUserRepos("testuser", 1, 12);

    expect(result).toEqual({
      data: mockRepos,
      totalCount: 25,
    });

    expect(mockApi.get).toHaveBeenCalledTimes(2);
    expect(mockApi.get).toHaveBeenNthCalledWith(
      1,
      "/users/testuser/repos?sort=updated&per_page=12&page=1"
    );
    expect(mockApi.get).toHaveBeenNthCalledWith(2, "/users/testuser");
  });

  it("should handle custom page and perPage parameters", async () => {
    const mockRepos = [{ id: 1, name: "repo1" }];
    const mockUser = { public_repos: 5 };

    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: mockRepos })
      .mockResolvedValueOnce({ status: 200, data: mockUser });

    const result = await fetchUserRepos("testuser", 2, 5);

    expect(result).toEqual({
      data: mockRepos,
      totalCount: 5,
    });

    expect(mockApi.get).toHaveBeenNthCalledWith(
      1,
      "/users/testuser/repos?sort=updated&per_page=5&page=2"
    );
  });

  it("should encode special characters in username", async () => {
    const mockRepos = [{ id: 1, name: "repo1" }];
    const mockUser = { public_repos: 1 };

    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: mockRepos })
      .mockResolvedValueOnce({ status: 200, data: mockUser });

    await fetchUserRepos("user@domain.com", 1, 12);

    expect(mockApi.get).toHaveBeenNthCalledWith(
      1,
      "/users/user%40domain.com/repos?sort=updated&per_page=12&page=1"
    );
    expect(mockApi.get).toHaveBeenNthCalledWith(
      2,
      "/users/user%40domain.com"
    );
  });

  it("should handle spaces in username", async () => {
    const mockRepos = [{ id: 1, name: "repo1" }];
    const mockUser = { public_repos: 1 };

    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: mockRepos })
      .mockResolvedValueOnce({ status: 200, data: mockUser });

    await fetchUserRepos("user name", 1, 12);

    expect(mockApi.get).toHaveBeenNthCalledWith(
      1,
      "/users/user%20name/repos?sort=updated&per_page=12&page=1"
    );
    expect(mockApi.get).toHaveBeenNthCalledWith(
      2,
      "/users/user%20name"
    );
  });

  it("should throw error when repos API fails", async () => {
    mockApi.get
      .mockResolvedValueOnce({
        status: 404,
        data: { message: "Not found" },
      })
      .mockResolvedValueOnce({
        status: 200,
        data: { public_repos: 0 },
      });

    await expect(fetchUserRepos("testuser")).rejects.toThrow(
      "Failed to fetch user repositories"
    );
  });

  it("should throw error when user API fails", async () => {
    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: [] })
      .mockResolvedValueOnce({
        status: 500,
        data: { message: "Internal error" },
      });

    await expect(fetchUserRepos("testuser")).rejects.toThrow(
      "Failed to fetch user repositories"
    );
  });

  it("should throw error when both APIs fail", async () => {
    mockApi.get
      .mockResolvedValueOnce({
        status: 500,
        data: { message: "Internal error" },
      })
      .mockResolvedValueOnce({
        status: 404,
        data: { message: "Not found" },
      });

    await expect(fetchUserRepos("testuser")).rejects.toThrow(
      "Failed to fetch user repositories"
    );
  });

  it("should handle empty repositories response", async () => {
    const mockUser = { public_repos: 0 };

    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: [] })
      .mockResolvedValueOnce({ status: 200, data: mockUser });

    const result = await fetchUserRepos("testuser");

    expect(result).toEqual({
      data: [],
      totalCount: 0,
    });
  });

  it("should handle user with no public repositories", async () => {
    const mockUser = { public_repos: 0 };

    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: [] })
      .mockResolvedValueOnce({ status: 200, data: mockUser });

    const result = await fetchUserRepos("testuser");

    expect(result).toEqual({
      data: [],
      totalCount: 0,
    });
  });

  it("should handle large number of repositories", async () => {
    const mockRepos = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `repo${i + 1}`,
    }));
    const mockUser = { public_repos: 1000 };

    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: mockRepos })
      .mockResolvedValueOnce({ status: 200, data: mockUser });

    const result = await fetchUserRepos("testuser", 1, 100);

    expect(result).toEqual({
      data: mockRepos,
      totalCount: 1000,
    });

    expect(mockApi.get).toHaveBeenNthCalledWith(
      1,
      "/users/testuser/repos?sort=updated&per_page=100&page=1"
    );
  });

  it("should handle edge case with very large page numbers", async () => {
    const mockRepos: unknown[] = [];
    const mockUser = { public_repos: 10000 };

    mockApi.get
      .mockResolvedValueOnce({ status: 200, data: mockRepos })
      .mockResolvedValueOnce({ status: 200, data: mockUser });

    const result = await fetchUserRepos("testuser", 1000, 12);

    expect(result).toEqual({
      data: [],
      totalCount: 10000,
    });

    expect(mockApi.get).toHaveBeenNthCalledWith(
      1,
      "/users/testuser/repos?sort=updated&per_page=12&page=1000"
    );
  });
});
