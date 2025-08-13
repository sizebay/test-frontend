import { Repository, RepositoryDetails, GitHubUser, GitHubApiError } from '@/types'

const GITHUB_API_BASE = 'https://api.github.com'

class GitHubApiService {
  private getHeaders(authToken?: string): HeadersInit {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'GitHub-Explorer-App'
    }
    
    // Adiciona token de autenticação se disponível
    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`
    }

    return headers
  }

  private async fetchFromGitHub<T>(endpoint: string, authToken?: string): Promise<T> {
    const url = `${GITHUB_API_BASE}${endpoint}`
    
    const response = await fetch(url, {
      headers: this.getHeaders(authToken),
      cache: 'no-store'
    })

    if (!response.ok) {
      let errorMessage = response.statusText || 'Failed to fetch data'
      
      // Tratamento específico para rate limiting
      if (response.status === 403) {
        const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining')
        const rateLimitReset = response.headers.get('X-RateLimit-Reset')
        
        if (rateLimitRemaining === '0') {
          const resetTime = rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000) : null
          const resetTimeStr = resetTime ? resetTime.toLocaleTimeString('pt-BR') : 'em breve'
          errorMessage = `Limite de requisições da API do GitHub excedido. Tente novamente às ${resetTimeStr} ou configure um token de acesso.`
        }
      }
      
      const error: GitHubApiError = {
        message: errorMessage,
        status: response.status
      }
      throw error
    }

    return response.json()
  }

  async getUserRepositories(username: string, authToken?: string): Promise<Repository[]> {
    return this.fetchFromGitHub<Repository[]>(`/users/${username}/repos`, authToken)
  }

  async getRepositoryDetails(owner: string, repo: string, authToken?: string): Promise<RepositoryDetails> {
    return this.fetchFromGitHub<RepositoryDetails>(`/repos/${owner}/${repo}`, authToken)
  }

  async getUserDetails(username: string, authToken?: string): Promise<GitHubUser> {
    return this.fetchFromGitHub<GitHubUser>(`/users/${username}`, authToken)
  }
}

export const githubApi = new GitHubApiService()