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
    console.log('props coins::', props.coins)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (props.loading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  console.log('props coins::', props.coins)
  return <Coins {...props} />
}

const mapStateToProps = (state: { coins: any; loading: boolean }) => ({
  coins: state.coins,
  loading: state.loading,
})

const mapDispatchToProps = {
  getCoins,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsContainer)
