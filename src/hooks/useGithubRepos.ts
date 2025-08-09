import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchUserRepos } from "@/services/github/fetchUserRepos"

type UseGithubReposOptions = {
    type?: string
    language?: string
    sort?: string
}

export function useGithubRepos(
    username: string,
    options?: UseGithubReposOptions
) {
    const perPage = 20
    return useInfiniteQuery({
        queryKey: ["repos", username, options],
        queryFn: ({ pageParam = 1 }) =>
            fetchUserRepos(username, pageParam, perPage, options),
        enabled: !!username,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < perPage) return undefined
            return allPages.length + 1
        },
        initialPageParam: 1,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
    })
}
