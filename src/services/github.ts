import { Repo, RepoDetails } from "@/types/github"

const GITHUB_API_CONFIG = {
  headers: {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Next.js GitHub Client",
  },
  next: { revalidate: 600 }, // cache por 10 minutos
} as const

async function githubFetch<T>(url: string, errorMessage: string): Promise<T> {
  const res = await fetch(url, GITHUB_API_CONFIG)

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.message || errorMessage)
  }
  return res.json()
}

export async function fetchUserRepos(username: string, page = 1, perPage = 12): Promise<Repo[]> {
  const search = new URLSearchParams({ username, page: String(page), per_page: String(perPage) })
  const url = `https://api.github.com/users/${username}/repos?${search.toString()}`
  
  return githubFetch<Repo[]>(url, "Erro ao buscar repositórios")
}

export async function fetchRepoDetails(owner: string, repo: string): Promise<RepoDetails> {
  const url = `https://api.github.com/repos/${owner}/${repo}`
  
  return githubFetch<RepoDetails>(url, "Erro ao buscar detalhes do repositório")
}