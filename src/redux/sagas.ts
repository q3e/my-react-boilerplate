import { put, takeLatest, all } from "redux-saga/effects";
import api from "../api";

function* fetchCoins() {
  try {
    let response = yield api
      .fetchCoins()
      .then((res) => {
        return res.body.data;
      })
      .catch((err) => {
        console.error(err);
      });
    yield put({ type: "GET_COINS_SUCCESS", coins: response });
  } catch (err) {
    yield put({ type: "GET_COINS_FAILED" });
    console.error(err);
  } finally {
  }
}

function* fetchCoinDetails(action: { slug: string }) {
  try {
    let response = yield api
      .fetchCoinDetails(action.slug)
      .then((res) => {
        console.log(res.body.data);
        return res.body.data;
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("coin-das", response);
    yield put({ type: "GET_COIN_DETAILS_SUCCESS", coinDetails: response });
  } catch (err) {
    console.log(err);
    yield put({ type: "GET_COIN_DETAILS_FAILED" });
  } finally {
  }
}

function* actionWatcher() {
  yield takeLatest("GET_COINS_REQUESTED", fetchCoins);
  // @ts-ignore
  yield takeLatest("GET_COIN_DETAILS_REQUESTED", fetchCoinDetails);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
