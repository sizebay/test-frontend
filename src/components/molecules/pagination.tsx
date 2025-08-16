"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import { Button } from "../atoms";

type PaginationProps = {
  totalPages: number;
};

export function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const createPages = (totalPages: number) => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const pages = createPages(totalPages);

  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="secondary" disabled={currentPage === 1}>
        <Link href={createPageURL(currentPage - 1)}>Anterior</Link>
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "tertiary"}
          size="icon"
        >
          <Link href={createPageURL(page)}>{page}</Link>
        </Button>
      ))}
      <Button variant="secondary" disabled={currentPage === totalPages}>
        <Link href={createPageURL(currentPage + 1)}>Próximo</Link>
      </Button>
    </div>
  );
}
