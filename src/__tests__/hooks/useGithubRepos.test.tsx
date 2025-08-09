import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGithubRepos } from '../../hooks/useGithubRepos'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

afterEach(() => {
    jest.resetAllMocks()
})

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false },
        },
    })
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

function TestComponent({ username }: { username: string }) {
    const { data, isLoading, isError, error } = useGithubRepos(username)

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {(error as Error).message}</div>
    if (!data || data.pages.length === 0) return <div>No repos</div>

    return (
        <ul role="list">
            {data.pages[0].map((repo) => (
                <li key={repo.id}>{repo.name}</li>
            ))}
        </ul>
    )
}

describe('useGithubRepos', () => {
    it('deve buscar e renderizar repositórios', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: [
                { id: 1, name: 'repo1', description: null, language: 'TS', owner: { login: 'user' } },
                { id: 2, name: 'repo2', description: 'desc', language: 'JS', owner: { login: 'user' } },
            ],
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        })

        render(<TestComponent username="user" />, { wrapper: createWrapper() })

        await waitFor(() => screen.getByText('repo1'))
        expect(screen.getByText('repo1')).toBeInTheDocument()
        expect(screen.getByText('repo2')).toBeInTheDocument()
    })

    it('deve lidar com erro de fetch', async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error('Failed to fetch'))

        render(<TestComponent username="user" />, { wrapper: createWrapper() })

        await waitFor(() => screen.getByText(/Error/))
        expect(screen.getByText(/Error/)).toBeInTheDocument()
    })

    it('não deve buscar se username for vazio', () => {
        render(<TestComponent username="" />, { wrapper: createWrapper() })

        expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
        expect(screen.queryByRole('list')).not.toBeInTheDocument()
    })
})
