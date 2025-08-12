import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, jest } from '@jest/globals'
import ErrorPage from '@/app/error'

describe('Error Page (Next.js Error Boundary)', () => {
  const mockError = new Error('Test error message')
  const mockReset = jest.fn()

  beforeEach(() => {
    mockReset.mockClear()
  })

  it('should render error message and reset button', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    
    expect(screen.getByText('Algo deu errado')).toBeInTheDocument()
    expect(screen.getByText(/Ocorreu um erro inesperado/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /tentar novamente/i })).toBeInTheDocument()
  })

  it('should display error details when expanded', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    
    const detailsSummary = screen.getByText('Detalhes técnicos')
    fireEvent.click(detailsSummary)
    
    expect(screen.getByText('Test error message')).toBeInTheDocument()
  })

  it('should call reset function when button is clicked', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    
    const resetButton = screen.getByRole('button', { name: /tentar novamente/i })
    fireEvent.click(resetButton)
    
    expect(mockReset).toHaveBeenCalledTimes(1)
  })

  it('should render without error details when no error provided', () => {
    // @ts-ignore - Testing edge case
    render(<ErrorPage error={null} reset={mockReset} />)
    
    expect(screen.getByText('Algo deu errado')).toBeInTheDocument()
    expect(screen.queryByText('Detalhes técnicos')).not.toBeInTheDocument()
  })

  it('should have proper styling classes', () => {
    const { container } = render(<ErrorPage error={mockError} reset={mockReset} />)
    
    expect(container.firstChild).toHaveClass('min-h-[400px]', 'flex', 'items-center', 'justify-center', 'p-4')
  })

  it('should have alert triangle icon', () => {
    const { container } = render(<ErrorPage error={mockError} reset={mockReset} />)
    
    const alertIcon = container.querySelector('svg')
    expect(alertIcon).toBeInTheDocument()
  })

  it('should have refresh icon in reset button', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    
    const resetButton = screen.getByRole('button', { name: /tentar novamente/i })
    const refreshIcon = resetButton.querySelector('svg')
    expect(refreshIcon).toBeInTheDocument()
  })

  it('should render card structure correctly', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    
    const cardTitle = screen.getByText('Algo deu errado')
    expect(cardTitle).toBeInTheDocument()
  })

  it('should handle long error messages', () => {
    const longError = new Error('A'.repeat(1000))
    render(<ErrorPage error={longError} reset={mockReset} />)
    
    const detailsSummary = screen.getByText('Detalhes técnicos')
    fireEvent.click(detailsSummary)
    
    expect(screen.getByText('A'.repeat(1000))).toBeInTheDocument()
  })

  it('should be accessible via keyboard navigation', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    
    const resetButton = screen.getByRole('button', { name: /tentar novamente/i })
    expect(resetButton.tagName.toLowerCase()).toBe('button')
    expect(resetButton).not.toHaveAttribute('tabindex', '-1')
  })
})