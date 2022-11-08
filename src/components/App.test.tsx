import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app', () => {
  render(<App />)
  
  expect(screen.getByText(/hi, my name is/i)).toBeInTheDocument()
  expect(screen.getByText(/about david crowther/i)).toBeInTheDocument()
  expect(screen.queryAllByText(/latin america homeland/i)[0]).toBeInTheDocument()
  expect(screen.queryAllByText(/family tree/i)[0]).toBeInTheDocument()
  expect(screen.getByText(/marketing/i)).toBeInTheDocument()
})
