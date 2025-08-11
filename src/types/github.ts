export type Repo = {
  id: number
  name: string
  full_name: string
  description: string | null
  language: string | null
  owner: {
    login: string
  }
}

export type RepoDetails = {
  full_name: string
  name: string
  description: string | null
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  language: string | null
  html_url: string
  created_at: string
  updated_at: string
  owner: {
    login: string
  }
}
