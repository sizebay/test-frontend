const GITHUB_API_BASE = 'https://api.github.com'

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

class GitHubApiService {
  private async fetchFromGitHub<T>(endpoint: string): Promise<T> {
    const url = `${GITHUB_API_BASE}${endpoint}`
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'GitHub-Explorer-App'
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      const error: GitHubApiError = {
        message: response.statusText || 'Failed to fetch data',
        status: response.status
      }
      throw error
    }

    return response.json()
  }

  async getUserRepositories(username: string): Promise<Repository[]> {
    return this.fetchFromGitHub<Repository[]>(`/users/${username}/repos`)
  }

  async getRepositoryDetails(owner: string, repo: string): Promise<RepositoryDetail> {
    return this.fetchFromGitHub<RepositoryDetail>(`/repos/${owner}/${repo}`)
  }
}

export const githubApi = new GitHubApiService()