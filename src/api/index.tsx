import superagent from 'superagent'
// import prefixUrl from 'superagent-prefix'

//  proxy requests to by-pass CORS
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const listingsEndpoint =
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
const infoEndpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info'

export default {
  fetchCoins(start: string, limit: string) {
    return superagent
      .get(proxyUrl + listingsEndpoint + `?start=${start}&limit=${limit}`)
      .set({ 'X-CMC_PRO_API_KEY': process.env.REACT_APP_CMC_API_KEY })
      .set('accept', 'json')
  },
  fetchCoinDetails(slug: string) {
    return superagent
      .get(proxyUrl + infoEndpoint + `?slug=${slug}`)
      .set({ 'X-CMC_PRO_API_KEY': process.env.REACT_APP_CMC_API_KEY })
      .set('accept', 'json')
  },
}
