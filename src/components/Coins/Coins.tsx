import React from 'react'
import { Link } from 'react-router-dom'

import _isEmpty from 'lodash/isEmpty'

import Title from './styled'

const Coins = (props: { coins: any[][] }) => {
  return (
    <div className="container mx-auto">
      <Title>All coins</Title>
      <table className="w-full text-left table-collapse">
        <thead>
          <tr>
            <th className="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0">
              <div className="p-2 border-b border-gray-300">Currency name</div>
            </th>
            <th className="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0">
              <div className="p-2 border-b border-gray-300">Capitalization</div>
            </th>
            <th className="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0">
              <div className="p-2 border-b border-gray-300">Unit price</div>
            </th>
            <th className="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0">
              <div className="p-2 border-b border-gray-300">Market size</div>
            </th>
            <th className="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0">
              <div className="p-2 border-b border-gray-300">
                Change in 24 hours
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          {!_isEmpty(props.coins) &&
            props.coins.map((coin: { [key: string]: any }, index: number) => {
              return (
                <tr key={index + coin.quote.USD.market_cap}>
                  <td className="p-2 whitespace-no-wrap">
                    <Link to={`coin/${coin.slug}`}>{coin.name}</Link>
                  </td>
                  <td className="p-2 whitespace-no-wrap">
                    {coin.quote.USD.market_cap.toLocaleString('us-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-2 whitespace-no-wrap">
                    {coin.quote.USD.price.toLocaleString('us-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-2 whitespace-no-wrap ">
                    {' '}
                    {coin.quote.USD.market_cap}
                  </td>
                  <td
                    className={`p-2 whitespace-no-wrap text-right ${
                      coin.quote.USD.percent_change_24h > 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {coin.quote.USD.percent_change_24h}
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Coins
