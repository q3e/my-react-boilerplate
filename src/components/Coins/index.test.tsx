import React from 'react'

import { render, screen } from '../../test-utils'

import CoinsContainer from '.'

describe('Coins Component:', () => {
  it('Renders the connected app with initialState', () => {
    render(<CoinsContainer />, { initialState: [] })

    expect(screen.getByText(/All coins/i)).toBeInTheDocument()
  })
})
