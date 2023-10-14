/**
 * useState 
 * useState 
 * 记忆函数
 * 处在同步的逻辑中，异步操作更新状态，异步更新dem
 */

import { useState, useEffect } from 'react';
import { Card, Button } from 'antd';

function State() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('useEffect');
  },[])
  
  useEffect(()=>{
    console.log(count);
  },[count])

  // 更新状态
  const toAdd = () => {
    const val = count + 1;
    setCount(val);
    console.log(count);
  }

  return (
    <Card 
      bordered={false}
    >
      <p>{ count }</p>
      <Button onClick={()=>toAdd()}>Add</Button>
    </Card>
  );
}
export default State;

