import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, renderWithRouter } from '../../test-utils'

import '@testing-library/jest-dom/extend-expect'
import App from '.'

describe('Routing tests:', () => {
  test('navigates to routes as expected', () => {
    const history = createMemoryHistory()
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>,
      '',
    )

    expect(container.innerHTML).toMatch('All coins')
    fireEvent.click(getByText(/about/i))
    expect(container.innerHTML).toMatch('About page')
  })

  test('landing on a bad page shows 404 page', () => {
    const history = createMemoryHistory()
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
      '',
    )
    history.push('/not/existing/page')
    expect(getByRole('heading')).toHaveTextContent('About page')
  })
})
