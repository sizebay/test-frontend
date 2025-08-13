import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter, useSearchParams } from 'next/navigation'
import Home from '@/app/page'
import { useGitHubRepositories } from '@/hooks/useGitHubRepositories'
import { useUserDetails } from '@/hooks/useUserDetails'
import { useGitHubAuth } from '@/hooks/useGitHubAuth'
import { Repository, GitHubUser } from '@/types'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}))

jest.mock('@/hooks/useGitHubRepositories')
jest.mock('@/hooks/useUserDetails')
jest.mock('@/hooks/useGitHubAuth')

jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return (
      <a href={href} {...props} data-testid={`link-${href}`}>
        {children}
      </a>
    )
  }
})

const mockPush = jest.fn()
const mockGet = jest.fn()

const mockUser: GitHubUser = {
  id: 1,
  login: 'testuser',
  name: 'Test User',
  avatar_url: 'https://github.com/testuser.png',
  bio: 'Test bio',
  public_repos: 10,
  followers: 100,
  following: 50,
  html_url: 'https://github.com/testuser',
  location: 'Test City',
  company: 'Test Company',
  blog: 'https://testuser.dev',
  created_at: '2020-01-01T00:00:00Z',
  email: 'test@example.com',
  public_gists: 5,
  updated_at: '2024-01-01T00:00:00Z'
}

const mockRepositories: Repository[] = [
  {
    id: 1,
    name: 'awesome-project',
    full_name: 'testuser/awesome-project',
    description: 'An awesome project for testing',
    html_url: 'https://github.com/testuser/awesome-project',
    stargazers_count: 150,
    forks_count: 25,
    language: 'TypeScript',
    updated_at: '2024-01-01T00:00:00Z',
    owner: {
      login: 'testuser',
      avatar_url: 'https://github.com/testuser.png'
    }
  },
  {
    id: 2,
    name: 'react-components',
    full_name: 'testuser/react-components',
    description: 'Reusable React components library',
    html_url: 'https://github.com/testuser/react-components',
    stargazers_count: 89,
    forks_count: 12,
    language: 'JavaScript',
    updated_at: '2024-01-15T00:00:00Z',
    owner: {
      login: 'testuser',
      avatar_url: 'https://github.com/testuser.png'
    }
  },
  {
    id: 3,
    name: 'api-server',
    full_name: 'testuser/api-server',
    description: 'REST API server with Node.js',
    html_url: 'https://github.com/testuser/api-server',
    stargazers_count: 45,
    forks_count: 8,
    language: 'Node.js',
    updated_at: '2024-02-01T00:00:00Z',
    owner: {
      login: 'testuser',
      avatar_url: 'https://github.com/testuser.png'
    }
  }
]

describe('Happy Path - Fluxo Completo da Aplicação', () => {
  beforeEach(() => {
    // Reset dos mocks
    jest.clearAllMocks()
    
    // Setup dos mocks
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush
    })
    
    ;(useSearchParams as jest.Mock).mockReturnValue({
      get: mockGet
    })
    
    ;(useGitHubAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true
    })
  })

  it('deve executar o fluxo completo: buscar usuário → visualizar repositórios → clicar em repositório', async () => {
    const user = userEvent.setup()
    
    // Estado inicial - sem usuário pesquisado
    mockGet.mockReturnValue(null)
    ;(useGitHubRepositories as jest.Mock).mockReturnValue({
      repositories: [],
      isLoading: false,
      error: null
    })
    ;(useUserDetails as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: null
    })

    const { rerender } = render(<Home />)

    // Verificar estado inicial
    expect(screen.getByText('Explore Repositórios GitHub')).toBeInTheDocument()
    expect(screen.getByText('Digite um nome de usuário para começar')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Digite o nome de usuário do GitHub')).toBeInTheDocument()

    // Passo 1: Pesquisar usuário
    const searchInput = screen.getByPlaceholderText('Digite o nome de usuário do GitHub')
    const searchButton = screen.getByRole('button', { name: /buscar/i })

    // Digitar nome do usuário
    await user.type(searchInput, 'testuser')
    expect(searchInput).toHaveValue('testuser')

    // Simular estado de loading durante a busca
    ;(useGitHubRepositories as jest.Mock).mockReturnValue({
      repositories: [],
      isLoading: true,
      error: null
    })
    ;(useUserDetails as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    // Clicar no botão de busca
    await user.click(searchButton)

    // Verificar se a URL foi atualizada
    expect(mockPush).toHaveBeenCalledWith('/?user=testuser')

    // Simular retorno dos dados após a busca
    ;(useGitHubRepositories as jest.Mock).mockReturnValue({
      repositories: mockRepositories,
      isLoading: false,
      error: null
    })
    ;(useUserDetails as jest.Mock).mockReturnValue({
      data: mockUser,
      loading: false,
      error: null
    })

    // Re-renderizar com os novos dados
    rerender(<Home />)

    // Passo 2: Verificar se os dados do usuário foram carregados
    await waitFor(() => {
      expect(screen.getByText('Test User')).toBeInTheDocument()
    })
    
    expect(screen.getByText('testuser')).toBeInTheDocument() // username sem @
    expect(screen.getByText('Test bio')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument() // public_repos
    expect(screen.getByText('100')).toBeInTheDocument() // followers

    // Passo 3: Verificar se os repositórios foram carregados
    await waitFor(() => {
      expect(screen.getByText('awesome-project')).toBeInTheDocument()
    })
    
    expect(screen.getByText('react-components')).toBeInTheDocument()
    expect(screen.getByText('api-server')).toBeInTheDocument()
    
    // Verificar descrições dos repositórios
    expect(screen.getByText('An awesome project for testing')).toBeInTheDocument()
    expect(screen.getByText('Reusable React components library')).toBeInTheDocument()
    expect(screen.getByText('REST API server with Node.js')).toBeInTheDocument()
    
    // Verificar linguagens
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    
    // Verificar estatísticas (stars e forks)
    expect(screen.getByText('⭐ 150')).toBeInTheDocument()
    expect(screen.getByText('🍴 25')).toBeInTheDocument()
    expect(screen.getByText('⭐ 89')).toBeInTheDocument()
    expect(screen.getByText('🍴 12')).toBeInTheDocument()

    // Passo 4: Clicar em um repositório para navegar para os detalhes
    const repositoryLink = screen.getByTestId('link-/testuser/awesome-project')
    expect(repositoryLink).toBeInTheDocument()
    expect(repositoryLink).toHaveAttribute('href', '/testuser/awesome-project')

    // Simular clique no repositório
    await user.click(repositoryLink)
    
    // Verificar se o link está correto (a navegação real seria testada em um teste E2E com Cypress/Playwright)
    expect(repositoryLink.getAttribute('href')).toBe('/testuser/awesome-project')
  })

  it('deve lidar com estado de loading durante a busca', async () => {
    const user = userEvent.setup()
    
    // Estado inicial
    mockGet.mockReturnValue(null)
    ;(useGitHubRepositories as jest.Mock).mockReturnValue({
      repositories: [],
      isLoading: false,
      error: null
    })
    ;(useUserDetails as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: null
    })

    render(<Home />)

    const searchInput = screen.getByPlaceholderText('Digite o nome de usuário do GitHub')
    await user.type(searchInput, 'testuser')

    // Simular estado de loading
    ;(useGitHubRepositories as jest.Mock).mockReturnValue({
      repositories: [],
      isLoading: true,
      error: null
    })

    const searchButton = screen.getByRole('button', { name: /buscar/i })
    await user.click(searchButton)

    // Verificar se o botão mostra estado de loading (pode não aparecer se o mock resolve muito rápido)
    // Verifica se o botão está desabilitado durante o loading
    await waitFor(() => {
      expect(searchButton).toBeDisabled()
    })
  })

  it('deve lidar com erro na busca de repositórios', async () => {
    const user = userEvent.setup()
    
    mockGet.mockReturnValue(null)
    ;(useGitHubRepositories as jest.Mock).mockReturnValue({
      repositories: [],
      isLoading: false,
      error: 'Erro ao carregar repositórios'
    })
    ;(useUserDetails as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: null
    })

    render(<Home />)

    const searchInput = screen.getByPlaceholderText('Digite o nome de usuário do GitHub')
    await user.type(searchInput, 'invaliduser')
    
    const searchButton = screen.getByRole('button', { name: /buscar/i })
    await user.click(searchButton)

    // Verificar se a mensagem de erro é exibida
    await waitFor(() => {
      const errorMessages = screen.getAllByText('Erro ao carregar repositórios')
      expect(errorMessages[0]).toBeInTheDocument()
    })
  })

  it('deve mostrar mensagem quando usuário não tem repositórios', async () => {
    const user = userEvent.setup()
    
    mockGet.mockReturnValue(null)
    ;(useGitHubRepositories as jest.Mock).mockReturnValue({
      repositories: [],
      isLoading: false,
      error: null
    })
    ;(useUserDetails as jest.Mock).mockReturnValue({
      data: mockUser,
      loading: false,
      error: null
    })

    render(<Home />)

    const searchInput = screen.getByPlaceholderText('Digite o nome de usuário do GitHub')
    await user.type(searchInput, 'testuser')
    
    const searchButton = screen.getByRole('button', { name: /buscar/i })
    await user.click(searchButton)

    // Verificar se a mensagem de repositórios vazios é exibida
    await waitFor(() => {
      expect(screen.getByText('Nenhum repositório encontrado para "testuser"')).toBeInTheDocument()
    })
  })

  it('deve permitir busca através de parâmetro na URL', async () => {
    // Simular usuário vindo da URL
    mockGet.mockReturnValue('testuser')
    ;(useGitHubRepositories as jest.Mock).mockReturnValue({
      repositories: mockRepositories,
      isLoading: false,
      error: null
    })
    ;(useUserDetails as jest.Mock).mockReturnValue({
      data: mockUser,
      loading: false,
      error: null
    })

    render(<Home />)

    // Verificar se o input já está preenchido (precisa aguardar o useEffect)
    await waitFor(() => {
      const searchInput = screen.getByPlaceholderText('Digite o nome de usuário do GitHub')
      expect(searchInput).toHaveValue('testuser')
    })

    // Verificar se os dados já foram carregados
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('awesome-project')).toBeInTheDocument()
  })
})