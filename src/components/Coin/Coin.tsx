import React from 'react'
import _isEmpty from 'lodash/isEmpty'
import _truncate from 'lodash/truncate'
import { DateTime } from 'luxon'

// TODO: Fix poor typing
const Coin = (props: any) => {
  const coin: { [key: string]: any } = props.coinDetails
  if (props.loading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  return (
    <>
      {!_isEmpty(coin) && (
        <div
          data-testid="coin-component"
          className="m-10 flex align-items-center justify-center"
        >
          <ul className="list-disc">
            <img src={coin.logo} alt={`${coin.name} logo`} />
            <li>Name: {coin.name}</li>
            <li>Symbol: {coin.symbol}</li>
            <li>
              Date Added to CMS:{' '}
              {DateTime.fromISO(coin.date_added).toFormat('yyyy LLL dd hh:mm')}
            </li>
            <li>Name: {coin.name}</li>
            <li>Description: {_truncate(coin.public_description)}</li>
            <li>Tags: {JSON.stringify(coin.tags)}</li>
            <li>Tag-names: {JSON.stringify(coin['tag-names'])}</li>
            <li>Tag-groups: {JSON.stringify(coin['tag-groups'])}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Coin
