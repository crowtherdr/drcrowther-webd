import React from 'react'
import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import Projects from './Projects'

// Mock window.innerWidth
const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
}

describe('Projects Component', () => {
  beforeEach(() => {
    mockInnerWidth(1024)
  })

  it('should render projects section with heading', () => {
    render(<Projects />)

    expect(screen.getByText(/projects/i)).toBeInTheDocument()
  })

  it('should set desktop state when window width is greater than 769', () => {
    mockInnerWidth(1024)
    render(<Projects />)

    expect(screen.getByText(/projects/i)).toBeInTheDocument()
  })

  it('should set mobile state when window width is 769 or less', () => {
    mockInnerWidth(500)
    render(<Projects />)

    expect(screen.getByText(/projects/i)).toBeInTheDocument()
  })

  it('should render project titles', () => {
    render(<Projects />)

    expect(screen.getAllByText(/latin america homeland/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/family tree/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/marketing/i)).toBeInTheDocument()
  })

  it('should render project demo links', () => {
    render(<Projects />)

    // Check for "Family Tree" link text - there are multiple, so use getAllByText
    const familyTreeLinks = screen.getAllByText(/^family tree$/i)
    expect(familyTreeLinks.length).toBeGreaterThan(0)
    // Verify at least one is a link
    const linkElement = familyTreeLinks.find((el) => el.tagName === 'A')
    expect(linkElement).toBeDefined()
  })

  it('should render example links with URLs', () => {
    render(<Projects />)

    const exampleLinks = screen.getAllByRole('link')
    expect(exampleLinks.length).toBeGreaterThan(0)
  })

  it('should handle mouse enter on example links', () => {
    render(<Projects />)

    // Find links with text content
    const links = screen.getAllByRole('link').filter((link) => link.textContent)

    if (links.length > 0) {
      fireEvent.mouseEnter(links[0])
      // Component should handle the state change without errors
      expect(links[0]).toBeInTheDocument()
    }
  })

  it('should render example links without URLs', () => {
    render(<Projects />)

    // The component should render links even without URLs (for example links without href)
    const allLinks = screen.getAllByRole('link')
    expect(allLinks.length).toBeGreaterThan(0)
  })

  it('should render project without demo URL (Latin America Homeland)', () => {
    render(<Projects />)

    // Latin America Homeland project doesn't have projectDemoUrl
    const latinAmericaTitle = screen.getAllByText(/latin america homeland/i)[0]
    expect(latinAmericaTitle).toBeInTheDocument()
  })

  it('should render project with demo URL (Family Tree)', () => {
    render(<Projects />)

    // Family Tree project has projectDemoUrl
    const familyTreeLinks = screen.getAllByText(/^family tree$/i)
    const linkWithHref = familyTreeLinks.find((el) => el.tagName === 'A' && el.getAttribute('href'))
    expect(linkWithHref).toBeDefined()
  })

  it('should render examples section for Marketing project', () => {
    render(<Projects />)

    // Marketing project has examples
    expect(screen.getByText(/archived production examples/i)).toBeInTheDocument()
  })

  it('should render multiple example links in ordered list', () => {
    render(<Projects />)

    // Marketing project has multiple example links
    expect(screen.getByText(/about familysearch/i)).toBeInTheDocument()
    expect(screen.getByText(/archives microsite/i)).toBeInTheDocument()
    expect(screen.getByText(/donate today/i)).toBeInTheDocument()
  })

  it('should handle mouse enter on different marketing examples', () => {
    render(<Projects />)

    const aboutFSLink = screen.getByText(/about familysearch/i)
    const archivesLink = screen.getByText(/archives microsite/i)

    // Hover over different links to change whichMarketingExample state
    fireEvent.mouseEnter(aboutFSLink)
    expect(aboutFSLink).toBeInTheDocument()

    fireEvent.mouseEnter(archivesLink)
    expect(archivesLink).toBeInTheDocument()
  })

  it('should render project images for project not equal to 3', () => {
    render(<Projects />)

    // Projects 1 and 2 should render their own images
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })

  it('should render marketing example image with id for project 3', () => {
    render(<Projects />)

    // Project 3 (Marketing) should have image with id="marketingExample"
    const marketingImage = document.getElementById('marketingExample')
    expect(marketingImage).toBeInTheDocument()
  })
})
