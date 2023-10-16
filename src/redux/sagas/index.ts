import { all } from "redux-saga/effects";
import userWatchSaga from "./userWatchSage"

function* mainSaga() {
  yield all([
    // 监听 saga 中有 userWatchSaga 操作，所以会拦截这个 action
    userWatchSaga()
  ])
}
export default mainSaga;