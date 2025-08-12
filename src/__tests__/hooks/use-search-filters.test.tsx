import { useSearchFilters } from "@/hooks/use-search-filters";
import { act, renderHook } from "@testing-library/react";
import { useRouter, useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("useSearchFilters", () => {
  it("should be able to update the search parameters", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (key: string) => (key === "username" ? "diego3g" : null),
      toString: () => "username=diego3g",
    });

    const { result } = renderHook(() => useSearchFilters());

    expect(result.current.githubUsername).toBe("diego3g");
    expect(result.current.githubUserRepository).toBeNull();

    act(() => {
      result.current.updateSearchParam({
        field: "username",
        value: "filipediaslima",
      });
    });

    expect(push).toHaveBeenCalledWith("?username=filipediaslima", {
      scroll: false,
    });
  });
});
