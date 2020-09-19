import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import Coins from './Coins'
import { getCoins } from '../../redux/actions'

const CoinsContainer: any = (props: {
  getCoins: () => void
  coins: any[][]
  loading: boolean
}) => {
  useEffect(() => {
    props.getCoins()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (props.loading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  return <Coins {...props} />
}

const mapStateToProps = (state: {
  coinsReducer: { coins: any; loading: any }
}) => ({
  coins: state.coinsReducer.coins,
  loading: state.coinsReducer.loading,
})

const mapDispatchToProps = {
  getCoins,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsContainer)
