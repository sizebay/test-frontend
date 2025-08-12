import { useState, useEffect } from 'react'
import { GitHubUser, ApiResponse } from '@/types'
import { githubApi } from '@/services/githubApi'
import { useGitHubAuth } from './useGitHubAuth'

export function useUserDetails(username: string | null): ApiResponse<GitHubUser> {
  const [data, setData] = useState<GitHubUser | undefined>(undefined)
  const [error, setError] = useState<any>(undefined)
  const [loading, setLoading] = useState(false)
  const { token } = useGitHubAuth()

  useEffect(() => {
    if (!username) {
      setData(undefined)
      setError(undefined)
      setLoading(false)
      return
    }

    const fetchUserDetails = async () => {
      setLoading(true)
      setError(undefined)
      
      try {
        const userDetails = await githubApi.getUserDetails(username, token)
        setData(userDetails)
      } catch (err) {
        setError(err)
        setData(undefined)
      } finally {
        setLoading(false)
      }
    }

    fetchUserDetails()
  }, [username, token])

  return { data, error, loading }
}