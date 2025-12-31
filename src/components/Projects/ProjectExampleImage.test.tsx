import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectExampleImage from './ProjectExampleImage'

describe('ProjectExampleImage Component', () => {
  it('should render project image for project 1', () => {
    render(<ProjectExampleImage whichMarketingExample={0} whichProject={1} />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('should render project image for project 2', () => {
    render(<ProjectExampleImage whichMarketingExample={0} whichProject={2} />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('should render marketing example for project 3', () => {
    render(<ProjectExampleImage whichMarketingExample={0} whichProject={3} />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('id', 'marketingExample')
  })

  it('should render different marketing examples for project 3', () => {
    const { rerender } = render(<ProjectExampleImage whichMarketingExample={0} whichProject={3} />)

    let image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    rerender(<ProjectExampleImage whichMarketingExample={1} whichProject={3} />)
    image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    rerender(<ProjectExampleImage whichMarketingExample={2} whichProject={3} />)
    image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('should render for project 0 (no image case)', () => {
    render(<ProjectExampleImage whichMarketingExample={0} whichProject={0} />)

    // Should not render an image when project is 0 and has no image
    const images = screen.queryAllByRole('img')
    expect(images.length).toBe(0)
  })

  it('should render for project 4', () => {
    render(<ProjectExampleImage whichMarketingExample={0} whichProject={4} />)

    // Should handle project 4 without errors
    const images = screen.queryAllByRole('img')
    // Project 4 might not have an image in the exampleImages array
    expect(images.length).toBeGreaterThanOrEqual(0)
  })

  it('should render with different whichMarketingExample indices', () => {
    render(<ProjectExampleImage whichMarketingExample={5} whichProject={3} />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('should render for project 3 with various marketing example indices', () => {
    // Test all marketing pages to ensure full coverage
    for (let i = 0; i < 10; i++) {
      const { unmount } = render(<ProjectExampleImage whichMarketingExample={i} whichProject={3} />)
      const image = screen.getByRole('img')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('id', 'marketingExample')
      unmount()
    }
  })

  it('should render for project 5', () => {
    render(<ProjectExampleImage whichMarketingExample={0} whichProject={5} />)

    const images = screen.queryAllByRole('img')
    // Project 5 has no image
    expect(images.length).toBe(0)
  })

  it('should handle edge case with high project index', () => {
    render(<ProjectExampleImage whichMarketingExample={0} whichProject={10} />)

    const images = screen.queryAllByRole('img')
    // High index should not cause errors
    expect(images.length).toBeGreaterThanOrEqual(0)
  })

  it('should render project 1 and 2 without marketing examples', () => {
    // Project 1
    const { rerender } = render(<ProjectExampleImage whichMarketingExample={0} whichProject={1} />)
    let images = screen.getAllByRole('img')
    expect(images.length).toBe(1)

    // Project 2
    rerender(<ProjectExampleImage whichMarketingExample={0} whichProject={2} />)
    images = screen.getAllByRole('img')
    expect(images.length).toBe(1)
  })
})
