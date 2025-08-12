import { renderHook, act } from '@testing-library/react'
import { useGitHubSearch } from '@/hooks/useGitHubSearch'
import { fetchUserRepos } from '@/services/github'

// Mock the dependencies
jest.mock('@/services/github')
jest.mock('nuqs', () => ({
  useQueryState: jest.fn(),
}))
jest.mock('swr')
jest.mock('@/hooks/useDebounce')

const mockFetchUserRepos = fetchUserRepos as jest.MockedFunction<typeof fetchUserRepos>
const mockUseQueryState = require('nuqs').useQueryState as jest.MockedFunction<any>
const mockUseSWR = require('swr').default as jest.MockedFunction<any>
const mockUseDebounce = require('@/hooks/useDebounce').useDebounce as jest.MockedFunction<any>

describe('useGitHubSearch', () => {
  const mockSetUsername = jest.fn()
  const mockSetCurrentPage = jest.fn()
  const mockRepos = [
    {
      id: 1,
      name: 'repo1',
      full_name: 'user/repo1',
      description: 'Test repo 1',
      language: 'TypeScript',
      owner: { login: 'user' }
    },
    {
      id: 2,
      name: 'repo2',
      full_name: 'user/repo2',
      description: 'Test repo 2',
      language: 'JavaScript',
      owner: { login: 'user' }
    }
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    
    // Mock useQueryState for username
    mockUseQueryState.mockImplementation((key: string) => {
      if (key === 'username') {
        return ['testuser', mockSetUsername]
      }
      if (key === 'page') {
        return [1, mockSetCurrentPage]
      }
      return [null, jest.fn()]
    })

    // Mock useDebounce
    mockUseDebounce.mockReturnValue('testuser')

    // Mock useSWR
    mockUseSWR.mockReturnValue({
      data: mockRepos,
      isLoading: false,
      error: null
    })
  })

  it('should return initial values correctly', () => {
    const { result } = renderHook(() => useGitHubSearch())

    expect(result.current.username).toBe('testuser')
    expect(result.current.currentPage).toBe(1)
    expect(result.current.repos).toEqual(mockRepos)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe(null)
    expect(result.current.hasPrevPage).toBe(false)
    expect(result.current.hasNextPage).toBe(false) // repos.length < 12
  })

  it('should indicate hasNextPage when repos length equals 12', () => {
    const fullPageRepos = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `repo${i + 1}`,
      full_name: `user/repo${i + 1}`,
      description: `Test repo ${i + 1}`,
      language: 'TypeScript',
      owner: { login: 'user' }
    }))

    mockUseSWR.mockReturnValue({
      data: fullPageRepos,
      isLoading: false,
      error: null
    })

    const { result } = renderHook(() => useGitHubSearch())

    expect(result.current.hasNextPage).toBe(true)
  })

  it('should indicate hasPrevPage when currentPage > 1', () => {
    mockUseQueryState.mockImplementation((key: string) => {
      if (key === 'username') {
        return ['testuser', mockSetUsername]
      }
      if (key === 'page') {
        return [2, mockSetCurrentPage]
      }
      return [null, jest.fn()]
    })

    const { result } = renderHook(() => useGitHubSearch())

    expect(result.current.currentPage).toBe(2)
    expect(result.current.hasPrevPage).toBe(true)
  })

  it('should call nextPage correctly', () => {
    const fullPageRepos = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `repo${i + 1}`,
      full_name: `user/repo${i + 1}`,
      description: `Test repo ${i + 1}`,
      language: 'TypeScript',
      owner: { login: 'user' }
    }))

    mockUseSWR.mockReturnValue({
      data: fullPageRepos,
      isLoading: false,
      error: null
    })

    const { result } = renderHook(() => useGitHubSearch())

    act(() => {
      result.current.nextPage()
    })

    expect(mockSetCurrentPage).toHaveBeenCalledWith(2)
  })

  it('should not call nextPage when hasNextPage is false', () => {
    const { result } = renderHook(() => useGitHubSearch())

    act(() => {
      result.current.nextPage()
    })

    expect(mockSetCurrentPage).not.toHaveBeenCalled()
  })

  it('should call prevPage correctly', () => {
    mockUseQueryState.mockImplementation((key: string) => {
      if (key === 'username') {
        return ['testuser', mockSetUsername]
      }
      if (key === 'page') {
        return [2, mockSetCurrentPage]
      }
      return [null, jest.fn()]
    })

    const { result } = renderHook(() => useGitHubSearch())

    act(() => {
      result.current.prevPage()
    })

    expect(mockSetCurrentPage).toHaveBeenCalledWith(1)
  })

  it('should not call prevPage when currentPage is 1', () => {
    const { result } = renderHook(() => useGitHubSearch())

    act(() => {
      result.current.prevPage()
    })

    expect(mockSetCurrentPage).not.toHaveBeenCalled()
  })

  it('should use correct SWR key with pagination', () => {
    mockUseQueryState.mockImplementation((key: string) => {
      if (key === 'username') {
        return ['testuser', mockSetUsername]
      }
      if (key === 'page') {
        return [3, mockSetCurrentPage]
      }
      return [null, jest.fn()]
    })

    renderHook(() => useGitHubSearch())

    expect(mockUseSWR).toHaveBeenCalledWith(
      'repos/testuser/page/3',
      expect.any(Function),
      expect.any(Object)
    )
  })

  it('should handle loading state', () => {
    mockUseSWR.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null
    })

    const { result } = renderHook(() => useGitHubSearch())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.repos).toEqual([])
  })

  it('should handle error state', () => {
    const error = new Error('API Error')
    mockUseSWR.mockReturnValue({
      data: undefined,
      isLoading: false,
      error
    })

    const { result } = renderHook(() => useGitHubSearch())

    expect(result.current.error).toBe(error)
    expect(result.current.repos).toEqual([])
  })

  it('should use default username when provided', () => {
    const { result } = renderHook(() => useGitHubSearch('defaultuser'))

    expect(mockUseQueryState).toHaveBeenCalledWith('username', {
      defaultValue: 'defaultuser'
    })
  })
})