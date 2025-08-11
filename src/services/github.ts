import { Repo } from "@/types/github"
export async function fetchUserRepos(username: string, page = 1, perPage = 12): Promise<Repo[]> {
  const search = new URLSearchParams({ username, page: String(page), per_page: String(perPage) })

  const res = await fetch(`https://api.github.com/users/${username}/repos?${search.toString()}`, {
    next: { revalidate: 600, }, //cache por 10 minutos
    headers: {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Next.js GitHub Client",
    },
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.message || "Erro ao buscar repositórios")
  }
  return res.json()
}
