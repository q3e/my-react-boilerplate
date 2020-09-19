import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Coins from '../Coins'
import Coin from '../Coin'

const About = () => <h1>About page</h1>
const NoMatch = () => <h1>404 Not Found</h1>

const App = (props: any) => {
  return (
    <Router>
      <nav className="flex flex-wrap flex-grow justify-center bg-teal-500 p-6">
        <Link className="text-teal-200 hover:text-white mr-4" to="/">
          Coins
        </Link>
        <Link className="text-teal-200 hover:text-white" to="/about">
          About
        </Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Coins} />
        <Route path="/about" component={About} />
        <Route path="/coin/:id" component={Coin} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
export default App
