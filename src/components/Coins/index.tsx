import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import Title from './styled'
import { getCoins } from '../../redux/actions'

const Coins: any = (props: { getCoins: (arg0: string) => void }) => {
  useEffect(() => {
    props.getCoins('COINS_FETCH_REQUESTED')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Title>All coins</Title>
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
