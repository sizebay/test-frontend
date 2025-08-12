import { describe, expect, it, beforeEach, afterEach, jest } from '@jest/globals'
import { fetchUserRepos, fetchRepoDetails } from '@/services/github'

// Mock global fetch
const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>
global.fetch = mockFetch

describe('GitHub Service', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('fetchUserRepos', () => {
    const mockReposData = [
      {
        id: 1,
        name: 'test-repo',
        full_name: 'testuser/test-repo',
        description: 'A test repository',
        language: 'TypeScript',
        stargazers_count: 10,
        forks_count: 5,
        html_url: 'https://github.com/testuser/test-repo'
      }
    ]

    it('should fetch user repositories successfully', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockReposData,
      } as Response)

      const result = await fetchUserRepos('testuser')

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.github.com/users/testuser/repos?username=testuser&page=1&per_page=12',
        {
          next: { revalidate: 600 },
          headers: {
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'Next.js GitHub Client',
          },
        }
      )
      expect(result).toEqual(mockReposData)
    })

    it('should handle custom page and perPage parameters', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockReposData,
      } as Response)

      await fetchUserRepos('testuser', 2, 20)

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.github.com/users/testuser/repos?username=testuser&page=2&per_page=20',
        expect.any(Object)
      )
    })

    it('should throw error when API returns error response', async () => {
      const errorMessage = 'User not found'
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: errorMessage }),
      } as Response)

      await expect(fetchUserRepos('nonexistentuser')).rejects.toThrow(errorMessage)
    })

    it('should throw generic error when API returns error without message', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({}),
      } as Response)

      await expect(fetchUserRepos('testuser')).rejects.toThrow('Erro ao buscar repositórios')
    })

    it('should handle JSON parsing errors gracefully', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => { throw new Error('JSON parse error') },
      } as Response)

      await expect(fetchUserRepos('testuser')).rejects.toThrow('Erro ao buscar repositórios')
    })

    it('should use default parameters correctly', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockReposData,
      } as Response)

      await fetchUserRepos('testuser')

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('page=1&per_page=12'),
        expect.any(Object)
      )
    })
  })

  describe('fetchRepoDetails', () => {
    const mockRepoDetails = {
      id: 1,
      name: 'test-repo',
      full_name: 'testuser/test-repo',
      owner: {
        login: 'testuser',
        avatar_url: 'https://github.com/avatars/testuser.png',
      },
      description: 'A test repository',
      html_url: 'https://github.com/testuser/test-repo',
      language: 'TypeScript',
      stargazers_count: 42,
      forks_count: 15,
      open_issues_count: 3,
      created_at: '2023-01-15T10:30:00Z',
      updated_at: '2023-12-20T14:45:00Z',
      default_branch: 'main',
      private: false,
    }

    it('should fetch repository details successfully', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockRepoDetails,
      } as Response)

      const result = await fetchRepoDetails('testuser', 'test-repo')

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.github.com/repos/testuser/test-repo',
        {
          next: { revalidate: 600 },
          headers: {
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'Next.js GitHub Client',
          },
        }
      )
      expect(result).toEqual(mockRepoDetails)
    })

    it('should throw error when repository is not found', async () => {
      const errorMessage = 'Not Found'
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: errorMessage }),
      } as Response)

      await expect(fetchRepoDetails('testuser', 'nonexistent-repo')).rejects.toThrow(errorMessage)
    })

    it('should throw generic error when API returns error without message', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({}),
      } as Response)

      await expect(fetchRepoDetails('testuser', 'test-repo')).rejects.toThrow('Erro ao buscar detalhes do repositório')
    })

    it('should handle JSON parsing errors gracefully', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => { throw new Error('JSON parse error') },
      } as Response)

      await expect(fetchRepoDetails('testuser', 'test-repo')).rejects.toThrow('Erro ao buscar detalhes do repositório')
    })

    it('should construct correct URL with owner and repo parameters', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockRepoDetails,
      } as Response)

      await fetchRepoDetails('facebook', 'react')

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.github.com/repos/facebook/react',
        expect.any(Object)
      )
    })
  })

  describe('Common headers and caching', () => {
    it('should include proper headers in all requests', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({}),
      } as Response)

      await fetchUserRepos('test')
      await fetchRepoDetails('test', 'repo')

      expect(mockFetch).toHaveBeenCalledTimes(2)
      
      mockFetch.mock.calls.forEach(call => {
        const [, options] = call
        expect(options).toHaveProperty('headers')
        expect((options as any).headers).toMatchObject({
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Next.js GitHub Client',
        })
      })
    })

    it('should use correct cache revalidation time', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({}),
      } as Response)

      await fetchUserRepos('test')
      await fetchRepoDetails('test', 'repo')

      expect(mockFetch).toHaveBeenCalledTimes(2)
      
      mockFetch.mock.calls.forEach(call => {
        const [, options] = call
        expect((options as any).next).toEqual({ revalidate: 600 })
      })
    })
  })
})