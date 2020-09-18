import React, { ReactNode } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'

const initialState: Coin[] = [
  {
    name: 'ShitCoin',
  },
]

interface Coin {
  [key: string]: any
}

const render = (
  ui: JSX.Element,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  }: // TODO: ideal type should be something like { initialState: InitialState; store: Store; [key: string]: any } - NOT any
  any,
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export all of RTL
export * from '@testing-library/react'
// override render method
export { render }
