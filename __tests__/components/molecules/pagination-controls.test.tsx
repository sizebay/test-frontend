import { render, screen, fireEvent } from '@testing-library/react'
import PaginationControls from '@/components/molecules/pagination-controls'

describe('PaginationControls', () => {
  const defaultProps = {
    currentPage: 2,
    hasNextPage: true,
    hasPrevPage: true,
    onNextPage: jest.fn(),
    onPrevPage: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders current page correctly', () => {
    render(<PaginationControls {...defaultProps} />)
    
    expect(screen.getByText('Página 2')).toBeInTheDocument()
  })

  it('calls onPrevPage when previous button is clicked', () => {
    render(<PaginationControls {...defaultProps} />)
    
    const prevButton = screen.getByRole('button', { name: /anterior/i })
    fireEvent.click(prevButton)
    
    expect(defaultProps.onPrevPage).toHaveBeenCalledTimes(1)
  })

  it('calls onNextPage when next button is clicked', () => {
    render(<PaginationControls {...defaultProps} />)
    
    const nextButton = screen.getByRole('button', { name: /próximo/i })
    fireEvent.click(nextButton)
    
    expect(defaultProps.onNextPage).toHaveBeenCalledTimes(1)
  })

  it('disables previous button when hasPrevPage is false', () => {
    render(<PaginationControls {...defaultProps} hasPrevPage={false} />)
    
    const prevButton = screen.getByRole('button', { name: /anterior/i })
    expect(prevButton).toBeDisabled()
  })

  it('disables next button when hasNextPage is false', () => {
    render(<PaginationControls {...defaultProps} hasNextPage={false} />)
    
    const nextButton = screen.getByRole('button', { name: /próximo/i })
    expect(nextButton).toBeDisabled()
  })

  it('disables both buttons when loading', () => {
    render(<PaginationControls {...defaultProps} isLoading={true} />)
    
    const prevButton = screen.getByRole('button', { name: /anterior/i })
    const nextButton = screen.getByRole('button', { name: /próximo/i })
    
    expect(prevButton).toBeDisabled()
    expect(nextButton).toBeDisabled()
  })

  it('shows page 1 correctly', () => {
    render(<PaginationControls {...defaultProps} currentPage={1} hasPrevPage={false} />)
    
    expect(screen.getByText('Página 1')).toBeInTheDocument()
    
    const prevButton = screen.getByRole('button', { name: /anterior/i })
    expect(prevButton).toBeDisabled()
  })

  it('handles last page correctly', () => {
    render(<PaginationControls {...defaultProps} currentPage={5} hasNextPage={false} />)
    
    expect(screen.getByText('Página 5')).toBeInTheDocument()
    
    const nextButton = screen.getByRole('button', { name: /próximo/i })
    expect(nextButton).toBeDisabled()
  })
})