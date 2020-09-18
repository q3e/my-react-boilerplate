import { put, takeLatest, all } from "redux-saga/effects";
import api from "../api";

function* fetchCoins() {
  try {
    let response = yield api
      .fetchCoins()
      .then((res) => {
        console.log(res);
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

function* actionWatcher() {
  yield takeLatest("GET_COINS_REQUESTED", fetchCoins);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
