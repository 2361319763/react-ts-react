/**
 * Context
 * 跨组件通信方案
 * Context 深层传递参数
 * Provider 供应商 => Consumer 消费者
 * 消费者从供应商中获取信息
 */

import React, { createContext, useState } from 'react';
import Child1 from './child1';
import Child2 from './child2';

interface ContextInterface {
  name:string;
  info: string;
  setInfo: (info: string) => void;
}

export const GlobalContext = createContext<ContextInterface|null>(null);

const ContextIndex: React.FC = () => {
  const [ info, setInfo ]  = useState<string>("");
  return (
    <GlobalContext.Provider value={{
      name: 'context',
      info, 
      setInfo
    }}>
      <Child1 />
      <Child2 />
    </GlobalContext.Provider>
  )
}

export default ContextIndex;