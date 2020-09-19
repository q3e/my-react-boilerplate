import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Coin from './Coin'

import { getCoinDetails } from '../../redux/actions'

const CoinsContainer = withRouter((props) => {
  useEffect(() => {
    // @ts-ignore
    props.getCoinDetails(props.match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // TODO: fix POOR type checking
  return <Coin {...props} coinDetails={(props as any).coinDetails} />
})

const mapStateToProps = (state: {
  coinDetailsReducer: { coinDetails: any; loading: any }
}) => ({
  coinDetails: state.coinDetailsReducer.coinDetails,
  loading: state.coinDetailsReducer.loading,
})

const mapDispatchToProps = {
  getCoinDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsContainer)
