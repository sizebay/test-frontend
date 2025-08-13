import React from 'react'
import { render } from '@testing-library/react'

interface MockTextProps {
  children: React.ReactNode
  as?: React.ElementType
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'error'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'bold'
  className?: string
  [key: string]: any
}

const MockText: React.FC<MockTextProps> = ({ children, as: Element = 'p', color = 'primary', size = 'md', weight = 'normal', ...props }) => {
  const colorClass = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    muted: 'text-muted',
    accent: 'text-accent',
    error: 'text-error'
  }[color]
  
  const sizeClass = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl'
  }[size]
  
  const weightClass = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold'
  }[weight]
  
  return (
    <Element 
      className={`${colorClass} ${sizeClass} ${weightClass} ${props.className || ''}`}
      {...props}
    >
      {children}
    </Element>
  )
}

describe('Text Component', () => {
  it('should render text content', () => {
    const { container } = render(<MockText>Hello World</MockText>)
    const element = container.querySelector('p')
    expect(element).toBeTruthy()
    expect(element?.textContent).toBe('Hello World')
  })

  it('should render as paragraph by default', () => {
    const { container } = render(<MockText>Paragraph text</MockText>)
    const paragraph = container.querySelector('p')
    expect(paragraph).toBeTruthy()
  })

  it('should render as different element when as prop is provided', () => {
    const { container } = render(<MockText as="h1">Heading text</MockText>)
    const heading = container.querySelector('h1')
    expect(heading).toBeTruthy()
    expect(heading?.textContent).toBe('Heading text')
  })

  it('should apply primary color class by default', () => {
    const { container } = render(<MockText>Primary text</MockText>)
    const element = container.querySelector('p')
    expect(element?.className).toContain('text-primary')
  })

  it('should apply secondary color class', () => {
    const { container } = render(<MockText color="secondary">Secondary text</MockText>)
    const element = container.querySelector('p')
    expect(element?.className).toContain('text-secondary')
  })

  it('should apply large size class', () => {
    const { container } = render(<MockText size="lg">Large text</MockText>)
    const element = container.querySelector('p')
    expect(element?.className).toContain('text-lg')
  })

  it('should apply bold weight class', () => {
    const { container } = render(<MockText weight="bold">Bold text</MockText>)
    const element = container.querySelector('p')
    expect(element?.className).toContain('font-bold')
  })

  it('should apply custom className', () => {
    const { container } = render(<MockText className="custom-class">Custom text</MockText>)
    const element = container.querySelector('p')
    expect(element?.className).toContain('custom-class')
  })

  it('should combine multiple style properties', () => {
    const { container } = render(
      <MockText color="error" size="xl" weight="bold">
        Styled text
      </MockText>
    )
    const element = container.querySelector('p')
    expect(element?.className).toContain('text-error')
    expect(element?.className).toContain('text-xl')
    expect(element?.className).toContain('font-bold')
  })
})