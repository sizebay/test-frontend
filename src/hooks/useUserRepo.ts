'use client'

import { fetchUserRepos } from '@/services/githubAPI'
import { Repositorio } from '@/types/github'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export default function useUserRepo(username: string, page = 1, perPage = 50) {
    return useQuery<Repositorio[]>({
        queryKey: ['repos', username, page, perPage],
        queryFn: () => fetchUserRepos(username, page, perPage),
        enabled: !!username,
    })
}