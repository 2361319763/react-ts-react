import React from 'react';
import { Button } from 'antd';
import { Dispatch } from 'redux';
import { store } from '@/store';

const dispatchSetNmae = (payload:string = 'reduxChild') => {
  store.dispatch({
    type: 'SET_NAME',
    payload
  })
}
const dispatchSetCount = () => {
    store.dispatch({
      type: 'SET_COUNT',
      payload: 1
    })
}

const reduxChild: React.FC = () => {

  const reduxThunkDispatchSetCount = () => {
    store.dispatch(syncGetCount());
  }
  const reduxPromiseDispatchSetCount = () => {
    store.dispatch(promiseGetCount());
  }

  const syncGetCount = () => {
    return (dispatch: Dispatch) => {
      setTimeout(() => {
        dispatch({
          type: 'SET_COUNT',
          payload: 2
        })
      },500)
    }
  }
  const promiseGetCount = () => {
    return new Promise((resolve,reject)=>{
      resolve({
        type: 'SET_COUNT',
        payload: 2
      })
    })
  }

  return (
    <div>
      <h2>redux-thunk & redux-promise</h2>
      <Button onClick={()=>{dispatchSetNmae()}}>发布 SET_NAME</Button>
      <Button onClick={()=>{dispatchSetCount()}}>发布 SET_COUNT</Button>
      <Button onClick={()=>{reduxThunkDispatchSetCount()}}>异步发布 redux-thunk SET_COUNT</Button>
      <Button onClick={()=>{reduxPromiseDispatchSetCount()}}>异步发布 redux-promise SET_COUNT</Button>
    </div>
  )
}

export default reduxChild;