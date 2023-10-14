import React, { useEffect, useState } from 'react';
import store from '@/redux/store';

const reduxChild2: React.FC = () => {
  const [name, setName] = useState<string>(store.getState().name);
  useEffect(()=> {
    store.subscribe(()=>{
      const state = {...store.getState()}
      setName(state.name);
      console.log('redux - 兄弟组件中订阅', store.getState());
    });
  },[])

  return (
    <div>
      <h2>兄弟组件</h2>
      <p>兄弟组件 — { name }</p>
    </div>
  )
}

export default reduxChild2;