import { renderHook, waitFor } from "@testing-library/react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { useUserRepos } from "../../hooks/useUserRepos";
import * as fetchUserReposModule from "../../app/actions/fetchUserRepos";

// Mock do fetchUserRepos
jest.mock("../../app/actions/fetchUserRepos");
const mockFetchUserRepos =
  fetchUserReposModule.fetchUserRepos as jest.MockedFunction<
    typeof fetchUserReposModule.fetchUserRepos
  >;

// Wrapper para o React Query
function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
  Wrapper.displayName = "TestWrapper";
  return Wrapper;
}

// Dados mock para os testes
const mockRepos = [
  {
    id: 1,
    name: "repo1",
    full_name: "user/repo1",
    owner: { login: "user" },
    description: "Test repo 1",
    language: "TypeScript",
    stargazers_count: 10,
    forks_count: 5,
    open_issues_count: 2,
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-02T00:00:00Z",
    html_url: "https://github.com/user/repo1",
  },
  {
    id: 2,
    name: "repo2",
    full_name: "user/repo2",
    owner: { login: "user" },
    description: "Test repo 2",
    language: "JavaScript",
    stargazers_count: 20,
    forks_count: 8,
    open_issues_count: 3,
    created_at: "2023-01-03T00:00:00Z",
    updated_at: "2023-01-04T00:00:00Z",
    html_url: "https://github.com/user/repo2",
  },
];

const mockResponse = {
  data: mockRepos,
  totalCount: 25,
};

describe("useUserRepos", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFetchUserRepos.mockResolvedValue(mockResponse);
  });

  it("should fetch user repositories successfully", async () => {
    const { result } = renderHook(() => useUserRepos("testuser"), {
      wrapper: createWrapper(),
    });

    // Estado inicial deve ser loading
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();

    // Aguardar o carregamento
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Verificar se os dados foram carregados
    expect(result.current.data).toEqual(mockRepos);
    expect(result.current.totalPages).toBe(3); // 25 repos / 12 per page = 3 pages
    expect(result.current.hasNextPage).toBe(true); // page 1 < totalPages 3 = true
    expect(result.current.hasPrevPage).toBe(false); // page 1 > 1 = false
    expect(mockFetchUserRepos).toHaveBeenCalledWith(
      "testuser",
      1,
      12
    );
  });

  it("should handle pagination correctly", async () => {
    const { result } = renderHook(
      () => useUserRepos("testuser", 2, 10),
      {
        wrapper: createWrapper(),
      }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Com 25 repos e 10 por página, página 2 deve ter hasNextPage = true e hasPrevPage = true
    expect(result.current.totalPages).toBe(3); // 25 / 10 = 3 pages
    expect(result.current.hasNextPage).toBe(true); // page 2 < totalPages 3
    expect(result.current.hasPrevPage).toBe(true); // page 2 > 1
    expect(mockFetchUserRepos).toHaveBeenCalledWith(
      "testuser",
      2,
      10
    );
  });

  it("should not fetch when username is empty", () => {
    const { result } = renderHook(() => useUserRepos(""), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
    expect(mockFetchUserRepos).not.toHaveBeenCalled();
  });

  it("should fetch when username has whitespace (Boolean() returns true for non-empty strings)", () => {
    const { result } = renderHook(() => useUserRepos("   "), {
      wrapper: createWrapper(),
    });

    // Boolean("   ") retorna true, então o hook fará fetch
    expect(result.current.isLoading).toBe(true);
    expect(mockFetchUserRepos).toHaveBeenCalledWith("   ", 1, 12);
  });

  it("should handle error state", async () => {
    const errorMessage = "Failed to fetch repositories";
    mockFetchUserRepos.mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useUserRepos("testuser"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe(errorMessage);
    expect(result.current.data).toBeUndefined();
  });

  it("should handle empty response", async () => {
    const emptyResponse = { data: [], totalCount: 0 };
    mockFetchUserRepos.mockResolvedValue(emptyResponse);

    const { result } = renderHook(() => useUserRepos("testuser"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual([]);
    expect(result.current.totalPages).toBe(0);
    expect(result.current.hasNextPage).toBe(false);
    expect(result.current.hasPrevPage).toBe(false);
  });

  it("should use default pagination values", async () => {
    const { result } = renderHook(() => useUserRepos("testuser"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Deve usar os valores padrão: page = 1, perPage = 12
    expect(mockFetchUserRepos).toHaveBeenCalledWith(
      "testuser",
      1,
      12
    );
  });

  it("should handle custom pagination values", async () => {
    const { result } = renderHook(
      () => useUserRepos("testuser", 3, 5),
      {
        wrapper: createWrapper(),
      }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(mockFetchUserRepos).toHaveBeenCalledWith("testuser", 3, 5);
  });

  it("should calculate pagination correctly for edge cases", async () => {
    // Teste com exatamente 12 repos (1 página)
    const exactPageResponse = {
      data: mockRepos.slice(0, 1),
      totalCount: 12,
    };
    mockFetchUserRepos.mockResolvedValue(exactPageResponse);

    const { result } = renderHook(
      () => useUserRepos("testuser", 1, 12),
      {
        wrapper: createWrapper(),
      }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.totalPages).toBe(1);
    expect(result.current.hasNextPage).toBe(false);
    expect(result.current.hasPrevPage).toBe(false);
  });

  it("should preserve all query properties", async () => {
    const { result } = renderHook(() => useUserRepos("testuser"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Verificar se todas as propriedades do useQuery são preservadas
    expect(result.current).toHaveProperty("isLoading");
    expect(result.current).toHaveProperty("isError");
    expect(result.current).toHaveProperty("isSuccess");
    expect(result.current).toHaveProperty("error");
    expect(result.current).toHaveProperty("refetch");
    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("totalPages");
    expect(result.current).toHaveProperty("hasNextPage");
    expect(result.current).toHaveProperty("hasPrevPage");
  });

  it("should handle username with special characters", async () => {
    const specialUsername = "user-name_with.special@chars";

    const { result } = renderHook(
      () => useUserRepos(specialUsername),
      {
        wrapper: createWrapper(),
      }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(mockFetchUserRepos).toHaveBeenCalledWith(
      specialUsername,
      1,
      12
    );
  });
});
