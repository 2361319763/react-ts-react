/**
 * useMemo
 * 它在每次重新渲染的时候能够缓存计算的结果
 */

import React, { useMemo, useState } from 'react';
import { Card, Button } from 'antd';

const useMemoIndex: React.FC = () => {
  let [count, setCount] = useState<number>(1);

  const name = useMemo(() => {
    console.log('useMemo', count);
    return 'useMemo —— ' + count;
  }, [count]);

  return (
    <Card>
      <h2>{ name }</h2>
      <Button onClick={()=>setCount(++count)}>Add</Button>
    </Card>
  )
}

export default useMemoIndex;
