import React, { useState } from 'react';
import LifeCycle from './index';

const LifeCycleTest:React.FC = () => {
  const [name, setName] = useState<string>("张三");
  const [showChild, setShowChild] = useState<boolean>(true);
  return (
    <div>
      <label htmlFor="">父组件：</label>
      <input type="text" value={ name } onChange={(e)=>setName(String(e.target.value))} />
      { showChild && <LifeCycle name={ name } />}
      <button onClick={()=>setShowChild(!showChild)}>{showChild ? '销毁子组件' : '显示子组件'}</button>
    </div>
  )
}

export default LifeCycleTest;