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

export interface RepositoryDetails {
  id: number
  name: string
  full_name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  watchers_count: number
  size: number
  default_branch: string
  created_at: string
  updated_at: string
  pushed_at: string
  html_url: string
  clone_url: string
  ssh_url: string
  homepage: string | null
  topics: string[]
  private: boolean
  license: {
    key: string
    name: string
    spdx_id: string
    url: string | null
  } | null
  owner: {
    login: string
    avatar_url: string
    html_url: string
  }
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