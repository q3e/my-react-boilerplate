const coinsReducer = (state = {}, action: { type: string; coins: any[] }) => {
  switch (action.type) {
    case "GET_COINS_REQUESTED":
      return { ...state, loading: true };
    case "GET_COINS_SUCCESS":
      return { ...state, loading: false, coins: action.coins };
    case "GET_COINS_FAILED":
      return { ...state, loading: true, coins: action.coins };
    default:
      return state;
  }
};

export default coinsReducer;
