/**
 * redux
 * 全局的状态管理
 * 可实现任意组件间的通信
 * 
 * redux-thunk 中间件 
 * 使 dispatch 可以传入一个函数实现异步赋值 (通过回调函数实现)
 * 
 * redux-promise 中间件 
 * 使 dispatch 可以传入一个函数实现异步赋值 (通过异步函数的返回值实现)
 * 
 * redux-saga 中间件
 * 基于生成器函数
 * 
 * redux-persist redux持久化
 * 可以选择 storage,cookie,session 等
 */

import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { store } from '@/store';
import ReduxChild from "./child";
import ReduxChild2 from "./child2";
import ReactReduxIndex from "./reactRedux";

const reduxIndex: React.FC = () => {
  const [name, setName] = useState<string>(store.getState().userReducer.name);
  const [showChild, setShowChild]= useState<boolean>(true);

  useEffect(()=> {
    // 未使用 react-redux 需要手动订阅和取消
    const unsubscribe = store.subscribe(()=>{
      const state = {...store.getState()};
      setName(state.userReducer.name);
      console.log('redux - 父组件中订阅', store.getState());
    });
    return () => {
      //取消订阅
      unsubscribe();
    }
  },[])

  return (
    <Card>
      <h2>redux</h2>
      <p>{ name }</p>
      {showChild && <ReduxChild2 />}
      <ReduxChild />
      <ReactReduxIndex />
      <Button onClick={()=>setShowChild(!showChild)}>{showChild?'隐藏':'显示'} Child2</Button>
    </Card>
  )
}

export default reduxIndex;