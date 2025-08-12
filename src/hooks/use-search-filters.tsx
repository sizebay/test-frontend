"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useSearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const githubUsername = searchParams.get("username");
  const githubUserRepository = searchParams.get("repository");

  const updateSearchParam = useCallback(
    ({ field, value }: { field: "username" | "repository"; value: string }) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      newSearchParams.set(field, value);

      router.push(`?${newSearchParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return {
    githubUsername,
    githubUserRepository,
    updateSearchParam,
  };
}
