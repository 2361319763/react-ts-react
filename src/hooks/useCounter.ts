/**
 * 你可以创建自定义钩子（custom hooks），以封装可重用的逻辑或状态管理逻辑。
 * 自定义钩子是普通的JavaScript函数，只是按照React的约定，它们通常以"use"开头
 */

import { useState } from 'react';

// 创建自定义钩子 useCounter
function useCounter(initialValue:number = 0) {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
}

export default useCounter;