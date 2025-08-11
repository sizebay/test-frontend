import React from 'react'
import { renderHook } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGithubRepos } from '../../hooks/useGithubRepos'
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
    mockedAxios.get.mockImplementation((url) => {
        console.log('mockedAxios.get called with', url);
        return Promise.resolve({
            data: [
                { id: 1, name: 'repo1', description: null, language: 'TS', owner: { login: 'user' } },
                { id: 2, name: 'repo2', description: 'desc', language: 'JS', owner: { login: 'user' } },
            ],
        });
    });
});




afterEach(() => {
    jest.resetAllMocks()
})

// Wrapper para React Query
const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } },
    })

    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

describe('useGithubRepos', () => {
    it('busca e retorna os repositórios corretamente', async () => {
        const { result } = renderHook(() => useGithubRepos('user'), {
            wrapper: createWrapper(),
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        expect(result.current.data?.pages[0]).toEqual([
            { id: 1, name: 'repo1', description: null, language: 'TS', owner: { login: 'user' }, isStarred: true },
            { id: 2, name: 'repo2', description: 'desc', language: 'JS', owner: { login: 'user' }, isStarred: true },
        ])

        expect(result.current.isError).toBe(false)
    })

    it('lida com erro de fetch', async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error('Failed to fetch'))

        const { result } = renderHook(() => useGithubRepos('user'), {
            wrapper: createWrapper(),
        })

        await waitFor(() => {
            expect(result.current.isError).toBe(true)
        })

        expect(result.current.error).toBeDefined()
    })


    it('não busca se username for vazio', () => {
        const { result } = renderHook(() => useGithubRepos(''), {
            wrapper: createWrapper(),
        })

        expect(result.current.isLoading).toBe(false)
        expect(result.current.data).toBeUndefined()
    })
})
