import { useState, useMemo } from "react";

type UsePaginationParams = {
  totalPages: number;
  maxPages?: number;
  initialPage?: number;
};

export function usePagination({
  totalPages,
  maxPages = 10,
  initialPage = 1,
}: UsePaginationParams) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const pages = useMemo(() => {
    if (totalPages <= maxPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pagesArray: Array<number> = [];
    const half = Math.floor(maxPages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage - half < 1) end = maxPages;
    if (currentPage + half > totalPages) start = totalPages - maxPages + 1;

    for (let i = start; i <= end; i++) pagesArray.push(i);

    return pagesArray;
  }, [totalPages, currentPage, maxPages]);

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const onPageSelect = (page: number) => {
    const validPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(validPage);
  };

  const onPrevious = () => {
    if (hasPrevious) setCurrentPage((page) => page - 1);
  };

  const onNext = () => {
    if (hasNext) setCurrentPage((page) => page + 1);
  };

  return {
    currentPage,
    pages,
    hasPrevious,
    hasNext,
    onNext,
    onPrevious,
    onPageSelect,
  };
}
