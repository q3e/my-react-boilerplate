export const getCoins = (start: string, limit: string) => ({
  type: "GET_COINS_REQUESTED",
  start,
  limit,
});

export const getCoinDetails = (slug: string) => ({
  type: "GET_COIN_DETAILS_REQUESTED",
  slug,
});
