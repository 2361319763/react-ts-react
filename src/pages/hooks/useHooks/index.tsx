import React from 'react';
import { Card } from 'antd';
import useCounter from '@/hooks/useCounter';

const useHooks: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <Card>
      <h2>useHooks</h2>
      <p>Count: {count}</p>
      <button onClick={()=>increment()}>加</button>
      <button onClick={()=>decrement()}>减</button>
      <button onClick={()=>reset()}>Reset</button>
    </Card>
  )
}

export default useHooks;