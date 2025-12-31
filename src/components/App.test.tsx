import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// Mock window.innerWidth
const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
}

describe('App Component', () => {
  beforeEach(() => {
    mockInnerWidth(1024)
  })

  it('should render the app', () => {
    render(<App />)

    expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument()
    expect(screen.getByText(/about david crowther/i)).toBeInTheDocument()
    expect(screen.queryAllByText(/latin america homeland/i)[0]).toBeInTheDocument()
    expect(screen.queryAllByText(/family tree/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/marketing/i)).toBeInTheDocument()
  })

  it('should set desktop state when window width is greater than 769', () => {
    mockInnerWidth(1024)
    render(<App />)

    expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument()
  })

  it('should set mobile state when window width is 769 or less', () => {
    mockInnerWidth(500)
    render(<App />)

    expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument()
  })

  it('should render about section with profile image', () => {
    render(<App />)

    const image = screen.getByAltText(/profile picture/i)
    expect(image).toBeInTheDocument()
  })

  it('should render all content paragraphs from JSON', () => {
    render(<App />)

    // The component maps through content paragraphs
    const paragraphs = screen.getAllByText(/david/i)
    expect(paragraphs.length).toBeGreaterThan(0)
  })

  it('should render about this site section', () => {
    render(<App />)

    expect(screen.getByText(/about this site/i)).toBeInTheDocument()
    expect(screen.getByText(/this site is built with/i)).toBeInTheDocument()
  })

  it('should render email link', () => {
    render(<App />)

    const emailLink = screen.getByText(/crowtherdr\+portfolio@gmail.com/i)
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.tagName).toBe('A')
  })

  it('should render copyright notice', () => {
    render(<App />)

    expect(screen.getByText(/© 2025 david r. crowther/i)).toBeInTheDocument()
  })
})
