import { linksFromHeaders } from "@/utils";
import { Pagination } from "../molecules";
import { TGithubPaginationHeaders } from "@/types";

type RepositoriesListPaginationProps = {
  links?: string;
};

export function RepositoriesListPagination({
  links,
}: RepositoriesListPaginationProps) {
  if (!links) return null;

  const paginationLinks = linksFromHeaders(links) as Record<
    TGithubPaginationHeaders,
    string
  >;

  if (!paginationLinks) return null;

  const lastPaginationLink = paginationLinks.last;
  if (lastPaginationLink) {
    const parsedLastPaginationLink = new URL(lastPaginationLink);
    const lastPage = parsedLastPaginationLink.searchParams.get("page");
    return <Pagination totalPages={Number(lastPage)} />;
  }

  const previousPaginationLink = paginationLinks.prev;
  if (previousPaginationLink) {
    const parsedPreviousPaginationLink = new URL(previousPaginationLink);
    const previousPage = parsedPreviousPaginationLink.searchParams.get("page");
    return <Pagination totalPages={Number(previousPage) + 1} />;
  }

  return null;
}
