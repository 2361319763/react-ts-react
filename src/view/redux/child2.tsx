import React, { useEffect, useState } from 'react';
import { store } from '@/store';

const reduxChild2: React.FC = () => {
  const [name, setName] = useState<string>(store.getState().userReducer.name);
  const [count, setCount] = useState<number>(store.getState().countReducer.count);
  useEffect(()=> {
    const unsubscribe = store.subscribe(()=>{
      const state = {...store.getState()}
      setName(state.userReducer.name);
      setCount(state.countReducer.count);
      console.log('redux - 兄弟组件中订阅', store.getState());
    });
    return () => {
      //取消订阅
      unsubscribe();
    }
  },[])

  return (
    <div>
      <h2>兄弟组件</h2>
      <p>name — { name }</p>
      <p>count — { count }</p>
    </div>
  )
}

export default reduxChild2;