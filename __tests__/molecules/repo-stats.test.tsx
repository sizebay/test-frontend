import { render, screen } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'
import RepoStats from '@/components/molecules/repo-stats'

// Mock do módulo de formatação
jest.mock('@/lib/format', () => ({
  formatNumber: jest.fn((num: number) => {
    return new Intl.NumberFormat("pt-BR").format(num)
  })
}))

describe('RepoStats', () => {
  it('should render all stats correctly', () => {
    render(<RepoStats stars={1250} forks={45} openIssues={12} />)
    
    expect(screen.getByText('1.250 stars')).toBeInTheDocument()
    expect(screen.getByText('45 forks')).toBeInTheDocument()
    expect(screen.getByText('12 issues abertas')).toBeInTheDocument()
  })

  it('should render zero values correctly', () => {
    render(<RepoStats stars={0} forks={0} openIssues={0} />)
    
    expect(screen.getByText('0 stars')).toBeInTheDocument()
    expect(screen.getByText('0 forks')).toBeInTheDocument()
    expect(screen.getByText('0 issues abertas')).toBeInTheDocument()
  })

  it('should render high numbers with formatting', () => {
    render(<RepoStats stars={1500000} forks={25000} openIssues={500} />)
    
    expect(screen.getByText('1.500.000 stars')).toBeInTheDocument()
    expect(screen.getByText('25.000 forks')).toBeInTheDocument()
    expect(screen.getByText('500 issues abertas')).toBeInTheDocument()
  })

  it('should have correct icons', () => {
    const { container } = render(<RepoStats stars={100} forks={50} openIssues={10} />)
    
    // Verifica se os ícones estão presentes através de suas classes
    const starIcon = container.querySelector('[data-testid], .lucide-star, svg')
    expect(starIcon).toBeInTheDocument()
  })

  it('should have proper container styling', () => {
    const { container } = render(<RepoStats stars={100} forks={50} openIssues={10} />)
    
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('flex', 'flex-wrap', 'gap-4', 'text-sm')
  })

  it('should have proper span styling for each stat', () => {
    const { container } = render(<RepoStats stars={100} forks={50} openIssues={10} />)
    
    const spans = container.querySelectorAll('span')
    spans.forEach(span => {
      expect(span).toHaveClass('inline-flex', 'items-center', 'gap-1')
    })
  })

  it('should render exactly three statistics', () => {
    const { container } = render(<RepoStats stars={100} forks={50} openIssues={10} />)
    
    const spans = container.querySelectorAll('span')
    expect(spans).toHaveLength(3)
  })

  it('should handle large numbers correctly', () => {
    render(<RepoStats stars={999999} forks={1500} openIssues={250} />)
    
    expect(screen.getByText('999.999 stars')).toBeInTheDocument()
    expect(screen.getByText('1.500 forks')).toBeInTheDocument()
    expect(screen.getByText('250 issues abertas')).toBeInTheDocument()
  })
})