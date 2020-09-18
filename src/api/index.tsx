import superagent from 'superagent'
// import prefixUrl from 'superagent-prefix'

//  proxy requests to by-pass CORS
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const listingsEndpoint =
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

export default {
  fetchCoins() {
    return superagent
      .get(proxyUrl + listingsEndpoint)
      .set({ 'X-CMC_PRO_API_KEY': process.env.REACT_APP_CMC_API_KEY })
      .set('accept', 'json')
  },
}
