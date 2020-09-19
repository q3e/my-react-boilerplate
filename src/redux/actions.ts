export const getCoins = () => ({
  type: "GET_COINS_REQUESTED",
});

export const getCoinDetails = (slug: string) => ({
  type: "GET_COIN_DETAILS_REQUESTED",
  slug,
});
