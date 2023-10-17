import { takeEvery, put, call } from "redux-saga/effects";
import { UserReducerState } from "../reducers/userReducer";

interface UserApiInterfacr {
  code: number;
  data: UserReducerState;
}

function *mainSaga() {
  // 监听组件发来的action
    yield takeEvery("GET_INFO",getUser)
}

function getUserApi() {
  return new Promise((resolve,reject)=>{
    console.log('getUserApi');
    resolve({
      code: 200,
      data: {
        name: "周子为",
        age: 25,
        sex: "男",
        phone: "13612345678"
      }
    })
  })
}

function *getUser() {
  let res:UserApiInterfacr = yield call(getUserApi);
  if (res.code === 200) {
    // 通过reducer完成redux中的数据更新
    yield put({ type: 'SET_USER', payload: res.data })
  }
  return 
}

export default mainSaga;