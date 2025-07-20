// Mock for react-tilt component for Jest testing
import React from 'react'

export const Tilt = ({ children, ...props }) => {
  return React.createElement('div', { ...props, 'data-testid': 'tilt-mock' }, children)
}

export default { Tilt }
