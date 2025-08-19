"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import { usePagination } from "@/hooks";

import { Button } from "../atoms";

type PaginationProps = {
  totalPages: number;
  maxPages?: number;
};

export function Pagination({ totalPages, maxPages = 10 }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { pages, onNext, onPrevious, onPageSelect } = usePagination({
    totalPages,
    maxPages,
    initialPage: currentPage,
  });

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="w-full flex items-center justify-end lg:justify-center gap-2">
      <Button
        variant="secondary"
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <Link tabIndex={-1} href={createPageURL(currentPage - 1)}>
          Anterior
        </Link>
      </Button>
      <div className="hidden gap-2 lg:flex">
        {pages.map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? "default" : "tertiary"}
            size="icon"
            onClick={() => onPageSelect(page)}
          >
            <Link tabIndex={-1} href={createPageURL(page)}>
              {page}
            </Link>
          </Button>
        ))}
      </div>
      <Button
        variant="secondary"
        disabled={currentPage === totalPages}
        onClick={onNext}
      >
        <Link tabIndex={-1} href={createPageURL(currentPage + 1)}>
          Próximo
        </Link>
      </Button>
    </div>
  );
}
