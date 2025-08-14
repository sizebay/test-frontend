'use client'

import { fetchRepoDetails, fetchUser, fetchUserRepos } from "@/services/githubAPI";
import { GitHubUser, Repositorio } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export default function userUserProfile(username?: string) {
    return useQuery<GitHubUser>({
        queryKey: ['user', username],
        queryFn: () => fetchUser(username as string),
        enabled: !!username,
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        placeholderData: (prev) => prev
    })
}