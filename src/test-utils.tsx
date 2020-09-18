import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import reducer from './redux/reducers'

interface Coin {
  [key: string]: any
}

const customRender = (
  ui: React.ReactNode,
  {
    initialState,
    store = createStore(reducer, initialState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: any = {},
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>,
    ),
    store,
    history,
  }
}

const renderWithRouter = (
  ui: JSX.Element,
  { route = '/', history = createMemoryHistory() }: any = {},
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Router history={history}>{children}</Router>
  )
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  }
}
// re-export all of RTL
export * from '@testing-library/react'
// override render method
export { customRender as render, renderWithRouter }
