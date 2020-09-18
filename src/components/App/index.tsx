import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Coins from '../Coins'
import Coin from '../Coin'

const About = () => <h1>About page</h1>
const NoMatch = () => <h1>404 Not Found</h1>

const App = (props: any) => {
  return (
    <Router>
      <Link to="/">Coins</Link>
      <Link to="/about">About</Link>
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
