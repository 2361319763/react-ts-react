/**
 * useRef
 * 能让你引用一个不需要渲染的值
 * 可以修改 ref.current 属性
 */
import React, { useRef } from 'react';
import { Card, Input, Button } from 'antd';
import type { InputRef } from 'antd';

const useRefIndex: React.FC = () => {
  const [name, setName] = React.useState<string>('useRef')
  let inputRef = useRef<InputRef>(null);
  const intervalRef = useRef<number>(0);

  const toFocus = () => {
    intervalRef.current++;
    console.log(inputRef);
    console.log(intervalRef);
    inputRef.current?.focus();
  }

  return (
    <Card>
      <h2>useRef</h2>
      { intervalRef.current }
      <Input value={ name } onChange={(e)=>setName(e.target.value)} ref={inputRef}></Input>
      <Button onClick={()=>{toFocus()}}>Add</Button>
    </Card>
  )
}

export default useRefIndex;