/**
 * forwordRef
 * 引用传递
 * 父组件直接获取子组件 dom
 */

import React, { useRef } from 'react';
import { Card, Button } from 'antd';
import type { InputRef } from 'antd';
import Child from './child';

const forwardRefIndex: React.FC = () => {
  const inputRef = useRef<InputRef>(null);

  const getFocus = () => {
    console.log(inputRef);
    inputRef.current?.focus();
  }
  return (
    <Card>
      <h2>forwardRef</h2>
      <Child ref={inputRef} />
      <Button onClick={()=>getFocus()}>获取焦点</Button>
    </Card>
  )
}

export default forwardRefIndex;