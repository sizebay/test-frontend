import axios from "axios"
import { Repo } from "@/types/github"

export async function fetchUserRepos(
    username: string,
    page: number = 1,
    perPage: number = 10,
    options?: { type?: string; sort?: string; language?: string }
): Promise<Repo[]> {
    const { type = "all", sort = "updated", language } = options || {}

    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN

    const [reposRes, starredRes] = await Promise.all([
        axios.get<Repo[]>(`https://api.github.com/users/${username}/repos`, {
            params: {
                page,
                per_page: perPage,
                type,
                sort,
                direction: "asc",
            },
            headers: {
                Authorization: `token ${token}`,
            },
        }),
        axios.get<Repo[]>(`https://api.github.com/user/starred`, {
            headers: {
                Authorization: `token ${token}`,
            },
        }),
    ])

    let repos: Repo[] = reposRes.data
    const starredRepos: Repo[] = starredRes.data

    // Cria um Set para busca rápida
    const starredSet = new Set(
        starredRepos.map((repo) => `${repo.owner.login}/${repo.name}`)
    )

    console.log('starredSet', starredSet);

    repos = repos.map((repo) => {
        console.log('repo--- map', starredSet.has(`${repo.owner.login}/${repo.name}`) || false)
        return {
            ...repo,
            isStarred: starredSet.has(`${repo.owner.login}/${repo.name}`) || false,
        }
    })

    if (language && language.trim() !== "") {
        repos = repos.filter(
            (repo) => repo.language?.toLowerCase() === language.toLowerCase()
        )
    }

    return repos
}
