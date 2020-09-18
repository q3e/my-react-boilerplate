import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { render } from '../../test-utils'
import Coin from '.'

test('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory()
  const route = 'coin'
  history.push(route)
  const { getByTestId } = render(
    <Router history={history}>
      <Coin />
    </Router>,
  )
  expect(getByTestId('coin-component')).toHaveTextContent('Coin -')
  // TODO: match prop is not injected here:  Find out why TF!
})
