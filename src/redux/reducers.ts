import { combineReducers } from "redux";
import _values from "lodash/values";

const coinsReducer = (state = {}, action: { type: string; coins: any[] }) => {
  switch (action.type) {
    case "GET_COINS_REQUESTED":
      return { ...state, loading: true };
    case "GET_COINS_SUCCESS":
      return { ...state, loading: false, coins: action.coins };
    case "GET_COINS_FAILED":
      return { ...state, loading: false };
    default:
      return state;
  }
};

// simplified for demo
const coinDetailsReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case "GET_COIN_DETAILS_REQUESTED":
      return { ...state, loading: true };
    case "GET_COIN_DETAILS_SUCCESS":
      console.log("state:", state);
      return {
        // convert obj to array
        coinDetails: _values(action.coinDetails)[0],
      };
    case "GET_COIN_DETAILS_FAILED":
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default combineReducers({
  coinsReducer,
  coinDetailsReducer,
});
