import { useState, useEffect, useCallback } from 'react'
import { GitHubUser, ApiResponse } from '@/types'
import { githubApi } from '@/services/githubApi'
import { useGitHubAuth } from './useGitHubAuth'

export function useUserDetails(username: string | null): ApiResponse<GitHubUser> {
  const [data, setData] = useState<GitHubUser | undefined>(undefined)
  const [error, setError] = useState<any>(undefined)
  const [loading, setLoading] = useState(false)
  const { authToken } = useGitHubAuth()

  const fetchUserDetails = useCallback(async () => {
    if (!username) {
      setData(undefined)
      setError(undefined)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(undefined)
    
    try {
      const userDetails = await githubApi.getUserDetails(username, authToken)
      setData(userDetails)
    } catch (err) {
      setError(err)
      setData(undefined)
    } finally {
      setLoading(false)
    }
  }, [username, authToken])

  useEffect(() => {
    fetchUserDetails()
  }, [fetchUserDetails])

  return { data, error, loading }
}