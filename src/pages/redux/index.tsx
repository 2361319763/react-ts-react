/**
 * redux
 * 全局的状态管理
 * 可实现任意组件间的通信
 */

import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import store from '@/redux/store';
import ReduxChild from "./child";
import ReduxChild2 from "./child2";

const reduxIndex: React.FC = () => {
  const [name, setName] = useState<string>(store.getState().name);
  useEffect(()=> {
    store.subscribe(()=>{
      const state = {...store.getState()};
      setName(state.name);
      console.log('redux - 父组件中订阅', store.getState());
    });
  },[])

  return (
    <Card>
      <h2>redux</h2>
      <p>{ name }</p>
      <ReduxChild2 />
      <ReduxChild />
    </Card>
  )
}

export default reduxIndex;