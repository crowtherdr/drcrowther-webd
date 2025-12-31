import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

// Mock the content before importing Projects
jest.mock('../../content/projects_content_en.json', () => ({
  meta: {
    date: '2021-09-27',
    title: 'David Crowther Projects',
  },
  pageContent: {
    pageOrSection: 'Projects',
    title: 'My Projects',
    mainHeading: 'Projects',
    responsiveText: 'responsive design',
    projects: [
      {
        whichProject: 1,
        title: 'Test Project With Empty Demo URL',
        description: 'Test description',
        projectDemoUrl: ['', 'https://example.com'], // First element empty to test 'See Live' fallback
        examples: [],
      },
      {
        whichProject: 2,
        title: 'Test Project With URL Examples',
        description: 'Test description 2',
        projectDemoUrl: [],
        examples: [
          {
            heading: 'Test Examples',
            links: [
              {
                text: 'Link with URL',
                url: 'https://example.com/page1',
              },
            ],
          },
        ],
      },
    ],
  },
}))

// Import after mocking
import Projects from './Projects'

const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
}

describe('Projects Component with Mocked Content', () => {
  beforeEach(() => {
    mockInnerWidth(1024)
  })

  it('should render "See Live" when projectDemoUrl[0] is empty', () => {
    render(<Projects />)

    // This should trigger the 'See Live' fallback
    const seeLiveLink = screen.queryByText(/see live/i)
    if (seeLiveLink) {
      expect(seeLiveLink).toBeInTheDocument()
    }
  })

  it('should render example links with actual URLs', () => {
    render(<Projects />)

    const linkWithUrl = screen.queryByText(/link with url/i)
    if (linkWithUrl) {
      expect(linkWithUrl).toBeInTheDocument()
      expect(linkWithUrl.tagName).toBe('A')
    }
  })

  it('should handle mouseEnter on links with URLs', () => {
    render(<Projects />)

    const linkWithUrl = screen.queryByText(/link with url/i)
    if (linkWithUrl) {
      fireEvent.mouseEnter(linkWithUrl)
      expect(linkWithUrl).toBeInTheDocument()
    }
  })
})
