import React from 'react'
import { render } from '../test-utils'
import App from './App'

describe('App Component:', () => {
  it('renders App with correct Heading ', () => {
    const { getByText } = render(<App />, {})
    const headerElem = getByText(/CRYPTOCURRENCY CHART/i)
    expect(headerElem).toBeInTheDocument()
  })
})
