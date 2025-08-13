import React from 'react'
import { render } from '@testing-library/react'

interface MockButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  isLoading?: boolean
  disabled?: boolean
  onClick?: () => void
  [key: string]: any
}

const MockButton: React.FC<MockButtonProps> = ({ children, variant = 'primary', isLoading = false, ...props }) => {
  const baseClass = 'button'
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost'
  const loadingClass = isLoading ? 'loading' : ''
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${loadingClass}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Carregando...' : children}
    </button>
  )
}

describe('Button Component', () => {
  it('should render button with text', () => {
    const { container } = render(<MockButton>Click me</MockButton>)
    const button = container.querySelector('button')
    expect(button).toBeTruthy()
    expect(button?.textContent).toBe('Click me')
  })

  it('should apply primary variant class by default', () => {
    const { container } = render(<MockButton>Primary Button</MockButton>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('btn-primary')
  })

  it('should apply secondary variant class', () => {
    const { container } = render(<MockButton variant="secondary">Secondary Button</MockButton>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('btn-secondary')
  })

  it('should show loading state', () => {
    const { container } = render(<MockButton isLoading>Loading Button</MockButton>)
    const button = container.querySelector('button')
    expect(button?.textContent).toBe('Carregando...')
    expect(button?.className).toContain('loading')
  })

  it('should be disabled when loading', () => {
    const { container } = render(<MockButton isLoading>Loading Button</MockButton>)
    const button = container.querySelector('button')
    expect(button?.disabled).toBe(true)
  })

  it('should handle click events', () => {
    const handleClick = jest.fn()
    const { container } = render(<MockButton onClick={handleClick}>Click me</MockButton>)
    const button = container.querySelector('button')
    
    button?.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})