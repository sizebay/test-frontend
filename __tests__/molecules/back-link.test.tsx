import { render, screen } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'
import BackLink from '@/components/molecules/back-link'

// Mock do componente Next.js Link
jest.mock('next/link', () => {
  return function MockedLink({ children, href, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
})

describe('BackLink', () => {
  it('should render the back link with correct text', () => {
    render(<BackLink />)
    
    expect(screen.getByText('Voltar')).toBeInTheDocument()
  })

  it('should have correct href attribute pointing to home', () => {
    render(<BackLink />)
    
    const link = screen.getByLabelText('Voltar para a busca')
    expect(link).toHaveAttribute('href', '/')
  })

  it('should have proper accessibility attributes', () => {
    render(<BackLink />)
    
    const link = screen.getByLabelText('Voltar para a busca')
    expect(link).toHaveAttribute('aria-label', 'Voltar para a busca')
  })

  it('should have correct CSS classes for styling', () => {
    render(<BackLink />)
    
    const link = screen.getByLabelText('Voltar para a busca')
    expect(link).toHaveClass(
      'inline-flex',
      'items-center', 
      'gap-2',
      'text-sm',
      'text-muted-foreground',
      'hover:text-foreground'
    )
  })

  it('should have proper container styling', () => {
    const { container } = render(<BackLink />)
    
    const containerDiv = container.firstChild as HTMLElement
    expect(containerDiv).toHaveClass('mb-6')
  })

  it('should contain an arrow icon', () => {
    const { container } = render(<BackLink />)
    
    // Verifica se existe um elemento SVG (ícone) no componente
    const svgIcon = container.querySelector('svg')
    expect(svgIcon).toBeInTheDocument()
  })

  it('should have icon with proper classes', () => {
    const { container } = render(<BackLink />)
    
    const svgIcon = container.querySelector('svg')
    expect(svgIcon).toHaveClass('h-4', 'w-4')
  })

  it('should render as a clickable link element', () => {
    render(<BackLink />)
    
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })

  it('should have proper text content structure', () => {
    render(<BackLink />)
    
    const link = screen.getByLabelText('Voltar para a busca')
    expect(link.textContent?.trim()).toBe('Voltar')
  })

  it('should be accessible via keyboard navigation', () => {
    render(<BackLink />)
    
    const link = screen.getByLabelText('Voltar para a busca')
    expect(link.tagName.toLowerCase()).toBe('a')
  })
})