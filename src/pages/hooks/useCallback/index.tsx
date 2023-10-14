/**
 * useCallback
 * 记忆函数
 * 防止因为组件重新渲染，导致方法被重新创建，起到缓存作用 只有第二个参数变化了，才重新声明一次
 */

import React, { useState, useCallback } from 'react';
import { Card, Button } from 'antd';

const useCallbackDemo: React.FC = () => {
  
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('useCallback');
  let countTest = 0;

  const addCount = () => {
    countTest++;
    setCount(count + 1);
    console.log('Add', count, countTest);
  }

  const useCallbackSddCount = useCallback(()=>{
    countTest++; // 缓存时 countTest = countTest++
    setCount(count + 1); // 0 缓存时 count = 0
    console.log('useCallback - Add', count, countTest);
  },[])

  return (
    <Card>
      <h2>{ name }</h2>
      <p>{ count } - { countTest }</p>
      <Button onClick={() => addCount()}>Add</Button>
      <Button onClick={() => useCallbackSddCount()}>useCallback - Add</Button>
    </Card>
  )
}

export default useCallbackDemo;