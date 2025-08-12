import { render, screen } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'
import RepoDetails from '@/components/organisms/repo-details'
import { RepoDetails as RepoDetailsType } from '@/types/github'

const mockRepoData: RepoDetailsType = {
  id: 1,
  name: 'test-repo',
  full_name: 'user/test-repo',
  owner: {
    login: 'user',
    avatar_url: 'https://github.com/avatars/user.png',
  },
  description: 'A test repository for testing purposes',
  html_url: 'https://github.com/user/test-repo',
  language: 'TypeScript',
  stargazers_count: 42,
  forks_count: 15,
  open_issues_count: 3,
  created_at: '2023-01-15T10:30:00Z',
  updated_at: '2023-12-20T14:45:00Z',
  default_branch: 'main',
  private: false,
}

// Mock do componente Next.js Link
jest.mock('next/link', () => {
  return function MockedLink({ children, href, ...props }: any) {
    return <a href={href} {...props}>{children}</a>
  }
})

// Mock dos componentes molecules
jest.mock('@/components/molecules/back-link', () => {
  return function MockedBackLink() {
    return <div data-testid="back-link">← Voltar</div>
  }
})

jest.mock('@/components/molecules/repo-stats', () => {
  return function MockedRepoStats({ stars, forks, openIssues }: any) {
    return (
      <div data-testid="repo-stats">
        Stars: {stars}, Forks: {forks}, Issues: {openIssues}
      </div>
    )
  }
})

jest.mock('@/components/molecules/repo-dates', () => {
  return function MockedRepoDates({ createdAt, updatedAt }: any) {
    return (
      <div data-testid="repo-dates">
        Created: {createdAt}, Updated: {updatedAt}
      </div>
    )
  }
})

describe('RepoDetails', () => {
  it('should render repository information correctly', () => {
    render(<RepoDetails data={mockRepoData} />)

    expect(screen.getByText('user/test-repo')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('A test repository for testing purposes')).toBeInTheDocument()
    expect(screen.getByText('Ver no GitHub')).toBeInTheDocument()
  })

  it('should render back link', () => {
    render(<RepoDetails data={mockRepoData} />)
    
    expect(screen.getByTestId('back-link')).toBeInTheDocument()
  })

  it('should render repository stats', () => {
    render(<RepoDetails data={mockRepoData} />)
    
    const repoStats = screen.getByTestId('repo-stats')
    expect(repoStats).toBeInTheDocument()
    expect(repoStats).toHaveTextContent('Stars: 42, Forks: 15, Issues: 3')
  })

  it('should render repository dates', () => {
    render(<RepoDetails data={mockRepoData} />)
    
    const repoDates = screen.getByTestId('repo-dates')
    expect(repoDates).toBeInTheDocument()
    expect(repoDates).toHaveTextContent('Created: 2023-01-15T10:30:00Z, Updated: 2023-12-20T14:45:00Z')
  })

  it('should render GitHub link with correct attributes', () => {
    render(<RepoDetails data={mockRepoData} />)
    
    const githubLink = screen.getByLabelText('Abrir no GitHub')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/user/test-repo')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should not render description when not provided', () => {
    const dataWithoutDescription = { ...mockRepoData, description: null }
    render(<RepoDetails data={dataWithoutDescription} />)
    
    expect(screen.queryByText('A test repository for testing purposes')).not.toBeInTheDocument()
  })

  it('should not render language badge when not provided', () => {
    const dataWithoutLanguage = { ...mockRepoData, language: null }
    render(<RepoDetails data={dataWithoutLanguage} />)
    
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument()
  })

  it('should have proper container styling', () => {
    const { container } = render(<RepoDetails data={mockRepoData} />)
    
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('max-w-3xl', 'mx-auto')
  })
})