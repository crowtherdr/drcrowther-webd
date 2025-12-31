import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

// Mock window.innerWidth
const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
}

describe('Hero Component', () => {
  beforeEach(() => {
    // Reset to desktop size before each test
    mockInnerWidth(1024)
  })

  it('should render hero content', () => {
    render(<Hero />)

    expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument()
    expect(screen.getByText(/know more/i)).toBeInTheDocument()
  })

  it('should set desktop state when window width is greater than 769', () => {
    mockInnerWidth(1024)
    render(<Hero />)

    expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument()
  })

  it('should set mobile state when window width is 769 or less', () => {
    mockInnerWidth(500)
    render(<Hero />)

    expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument()
  })

  it('should render the scroll link', () => {
    render(<Hero />)

    const knowMoreLink = screen.getByText(/know more/i)
    expect(knowMoreLink).toBeInTheDocument()
  })
})
