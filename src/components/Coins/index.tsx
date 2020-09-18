import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { getCoins } from '../../redux/actions'

const Coins: any = (props: { getCoins: (arg0: string) => void }) => {
  useEffect(() => {
    props.getCoins('COINS_FETCH_REQUESTED')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h2>All coins</h2>
    </>
  )
}

const mapStateToProps = (state: { coins: any }) => ({
  coins: state.coins,
})

const mapDispatchToProps = {
  getCoins,
}

export default connect(mapStateToProps, mapDispatchToProps)(Coins)
