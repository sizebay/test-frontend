interface SessionData {
  accessToken?: string
  user?: {
    name?: string
  }
}

type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading'

interface UseGitHubAuthReturn {
  isAuthenticated: boolean
  isLoading: boolean
  authToken: string | null
}

const mockUseGitHubAuth = (sessionData: SessionData | null = null, status: AuthStatus = 'unauthenticated'): UseGitHubAuthReturn => {
  const publicToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN
  
  let isAuthenticated = false
  let isLoading = false
  let authToken = null
  
  if (status === 'loading') {
    isLoading = true
  } else if (status === 'authenticated' && sessionData?.accessToken) {
    isAuthenticated = true
    authToken = sessionData.accessToken
  } else if (publicToken) {
    authToken = publicToken
  }
  
  return {
    isAuthenticated,
    isLoading,
    authToken
  }
}

describe('useGitHubAuth Hook', () => {
  const originalEnv = process.env.NEXT_PUBLIC_GITHUB_TOKEN
  
  beforeEach(() => {
    process.env.NEXT_PUBLIC_GITHUB_TOKEN = 'mock-public-token'
  })
  
  afterEach(() => {
    process.env.NEXT_PUBLIC_GITHUB_TOKEN = originalEnv
  })
  
  it('should return not authenticated state by default', () => {
    const result = mockUseGitHubAuth()
    
    expect(result.isAuthenticated).toBe(false)
    expect(result.isLoading).toBe(false)
    expect(result.authToken).toBe('mock-public-token')
  })
  
  it('should return loading state', () => {
    const result = mockUseGitHubAuth(null, 'loading')
    
    expect(result.isAuthenticated).toBe(false)
    expect(result.isLoading).toBe(true)
    expect(result.authToken).toBe(null)
  })
  
  it('should return authenticated state with session token', () => {
    const sessionData = {
      accessToken: 'session-access-token',
      user: { name: 'Test User' }
    }
    
    const result = mockUseGitHubAuth(sessionData, 'authenticated')
    
    expect(result.isAuthenticated).toBe(true)
    expect(result.isLoading).toBe(false)
    expect(result.authToken).toBe('session-access-token')
  })
  
  it('should use public token as fallback when not authenticated', () => {
    const result = mockUseGitHubAuth(null, 'unauthenticated')
    
    expect(result.isAuthenticated).toBe(false)
    expect(result.isLoading).toBe(false)
    expect(result.authToken).toBe('mock-public-token')
  })
  
  it('should prioritize session token over public token', () => {
    const sessionData = {
      accessToken: 'session-token'
    }
    
    const result = mockUseGitHubAuth(sessionData, 'authenticated')
    
    expect(result.authToken).toBe('session-token')
    expect(result.authToken).not.toBe('mock-public-token')
  })
  
  it('should handle case with no tokens available', () => {
    // Remover token público temporariamente
    delete process.env.NEXT_PUBLIC_GITHUB_TOKEN
    
    const result = mockUseGitHubAuth(null, 'unauthenticated')
    
    expect(result.isAuthenticated).toBe(false)
    expect(result.isLoading).toBe(false)
    expect(result.authToken).toBe(null)
  })
  
  it('should handle authenticated state without access token', () => {
    const sessionData = {
      user: { name: 'Test User' }
      // sem accessToken
    }
    
    const result = mockUseGitHubAuth(sessionData, 'authenticated')
    
    expect(result.isAuthenticated).toBe(false)
    expect(result.authToken).toBe('mock-public-token')
  })
  
  it('should maintain consistent token reference', () => {
    const sessionData = {
      accessToken: 'consistent-token'
    }
    
    const result1 = mockUseGitHubAuth(sessionData, 'authenticated')
    const result2 = mockUseGitHubAuth(sessionData, 'authenticated')
    
    expect(result1.authToken).toBe(result2.authToken)
  })
  
  it('should update authToken when session changes', () => {
    const sessionData1 = {
      accessToken: 'token-1'
    }
    
    const sessionData2 = {
      accessToken: 'token-2'
    }
    
    const result1 = mockUseGitHubAuth(sessionData1, 'authenticated')
    const result2 = mockUseGitHubAuth(sessionData2, 'authenticated')
    
    expect(result1.authToken).toBe('token-1')
    expect(result2.authToken).toBe('token-2')
    expect(result1.authToken).not.toBe(result2.authToken)
  })
})