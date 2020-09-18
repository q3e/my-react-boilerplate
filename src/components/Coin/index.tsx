import React from 'react'
import { withRouter } from 'react-router'

const Coin = withRouter((props) => {
  console.log(props.match)
  return <div data-testid="coin-component">Coin - {props.match.params.id}</div>
})

export default Coin
