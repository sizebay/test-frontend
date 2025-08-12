import { render, screen } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'
import RepoDates from '@/components/molecules/repo-dates'

// Mock do módulo de formatação
jest.mock('@/lib/format', () => ({
  formatDateISO: jest.fn((dateString: string) => {
    // Simula a formatação de data para português brasileiro
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    })
  })
}))

describe('RepoDates', () => {
  const mockCreatedAt = '2023-01-15T10:30:00Z'
  const mockUpdatedAt = '2023-12-20T14:45:00Z'

  it('should render created and updated dates correctly', () => {
    render(<RepoDates createdAt={mockCreatedAt} updatedAt={mockUpdatedAt} />)
    
    expect(screen.getByText('Criado em:')).toBeInTheDocument()
    expect(screen.getByText('Atualizado em:')).toBeInTheDocument()
    expect(screen.getByText('15/01/2023')).toBeInTheDocument()
    expect(screen.getByText('20/12/2023')).toBeInTheDocument()
  })

  it('should have proper container styling', () => {
    const { container } = render(<RepoDates createdAt={mockCreatedAt} updatedAt={mockUpdatedAt} />)
    
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('grid', 'md:grid-cols-2', 'gap-2', 'text-sm', 'text-muted-foreground')
  })

  it('should have proper label styling', () => {
    render(<RepoDates createdAt={mockCreatedAt} updatedAt={mockUpdatedAt} />)
    
    const createdLabel = screen.getByText('Criado em:')
    const updatedLabel = screen.getByText('Atualizado em:')
    
    expect(createdLabel).toHaveClass('font-medium', 'text-foreground')
    expect(updatedLabel).toHaveClass('font-medium', 'text-foreground')
  })

  it('should render exactly two date containers', () => {
    const { container } = render(<RepoDates createdAt={mockCreatedAt} updatedAt={mockUpdatedAt} />)
    
    const dateContainers = container.querySelectorAll('.grid > div')
    expect(dateContainers).toHaveLength(2)
  })

  it('should handle same creation and update dates', () => {
    const sameDate = '2023-06-15T12:00:00Z'
    render(<RepoDates createdAt={sameDate} updatedAt={sameDate} />)
    
    const formattedDates = screen.getAllByText('15/06/2023')
    expect(formattedDates).toHaveLength(2)
  })

  it('should handle different date formats', () => {
    const differentFormatDate = '2023-03-08T08:15:30.123Z'
    render(<RepoDates createdAt={differentFormatDate} updatedAt={mockUpdatedAt} />)
    
    expect(screen.getByText('08/03/2023')).toBeInTheDocument()
    expect(screen.getByText('20/12/2023')).toBeInTheDocument()
  })

  it('should call formatDateISO function correctly', () => {
    const { formatDateISO } = require('@/lib/format')
    formatDateISO.mockClear()
    
    render(<RepoDates createdAt={mockCreatedAt} updatedAt={mockUpdatedAt} />)
    
    expect(formatDateISO).toHaveBeenCalledWith(mockCreatedAt)
    expect(formatDateISO).toHaveBeenCalledWith(mockUpdatedAt)
    expect(formatDateISO).toHaveBeenCalledTimes(2)
  })

  it('should maintain responsive grid layout', () => {
    const { container } = render(<RepoDates createdAt={mockCreatedAt} updatedAt={mockUpdatedAt} />)
    
    const gridContainer = container.firstChild as HTMLElement
    expect(gridContainer).toHaveClass('md:grid-cols-2')
  })
})