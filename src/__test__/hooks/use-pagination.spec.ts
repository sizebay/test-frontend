import { usePagination } from "@/hooks";
import { act, renderHook } from "@testing-library/react";

describe("usePagination", () => {
  it("Deve inicializar corretamente as páginas", async () => {
    const { result } = renderHook(() =>
      usePagination({ totalPages: 5, initialPage: 1, maxPages: 3 })
    );

    expect(result.current.currentPage).toBe(1);
    expect(result.current.pages).toStrictEqual([1, 2, 3]);
    expect(result.current.hasPrevious).toBe(false);
    expect(result.current.hasNext).toBe(true);
  });

  it("Deve avançar uma página", async () => {
    const { result } = renderHook(() =>
      usePagination({ totalPages: 10, initialPage: 1 })
    );

    act(() => {
      result.current.onNext();
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.hasPrevious).toBe(true);
    expect(result.current.hasNext).toBe(true);
  });

  it("Deve retroceder uma página", async () => {
    const { result } = renderHook(() =>
      usePagination({ totalPages: 10, initialPage: 5 })
    );

    act(() => {
      result.current.onPrevious();
    });

    expect(result.current.currentPage).toBe(4);
    expect(result.current.hasPrevious).toBe(true);
    expect(result.current.hasNext).toBe(true);
  });

  it("Deve selecionar uma página", async () => {
    const { result } = renderHook(() =>
      usePagination({ totalPages: 10, initialPage: 1 })
    );

    act(() => {
      result.current.onPageSelect(5);
    });

    expect(result.current.currentPage).toBe(5);
    expect(result.current.hasPrevious).toBe(true);
    expect(result.current.hasNext).toBe(true);
  });
});
