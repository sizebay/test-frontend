export interface Repository {
  id: number
  name: string
  full_name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  html_url: string
  owner: {
    login: string
    avatar_url: string
  }
}

export interface RepositoryDetail extends Repository {
  default_branch: string
  open_issues_count: number
  watchers_count: number
  size: number
  created_at: string
  pushed_at: string
  clone_url: string
  ssh_url: string
  homepage: string | null
  topics: string[]
}

export interface GitHubApiError {
  message: string
  status: number
}

export interface ApiResponse<T> {
  data?: T
  error?: GitHubApiError
  loading: boolean
}