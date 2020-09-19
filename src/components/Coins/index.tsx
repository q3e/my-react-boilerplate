import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'

import Coins from './Coins'
import { getCoins } from '../../redux/actions'

const CoinsContainer: any = (props: any) => {
  const [pageCount, setPageCount] = useState(1)
  const handlePrevious = () => {
    if (pageCount > 1) {
      setPageCount(pageCount - 1)
    }
  }
  const handleNext = () => {
    setPageCount(pageCount + 1)
  }

  useEffect(() => {
    const start = (pageCount * 20 + 1 - 20).toString()
    const limit = (20).toString()
    props.getCoins(start, limit)
    const intervalId = setInterval(props.getCoins, 30000, start, limit)
    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount])

  if (props.loading !== undefined && props.loading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  return (
    <>
      <Coins {...props} />

      <div className="flex justify-end">
        <button
          onClick={handlePrevious}
          className="mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          {'<<'}
        </button>
        <button
          onClick={handleNext}
          className="ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          {'>>'}
        </button>
      </div>
    </>
  )
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
