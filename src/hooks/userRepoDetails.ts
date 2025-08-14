'use client'

import { fetchRepoDetails } from "@/services/githubAPI";
import { Repositorio } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export default function useRepoDetails(owner: string, repo: string) {
    return useQuery<Repositorio>({
        queryKey: ['repo', owner, repo],
        queryFn: () => fetchRepoDetails(owner, repo),
        enabled: !!owner && !!repo,
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        placeholderData: (prev) => prev

    })
}