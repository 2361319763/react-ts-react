/**
 * useImperativeHandle 
 * useImperativeHandle 通常与 forwardRef 一起使用
 * 可用于访问组件内部的方法和属性
 * 类似 vue3 中的 defineExpose
 * 
 * 使用 useImperativeHandle可以带来的好处
 *  更好的封装：你可以只暴露你想让父组件访问的特定方法或属性。
 *  更多的控制：你可以精确控制组件的行为，而不是依赖于状态或属性的变化。
 * 它的局限性及潜在风险
 *  过度使用：过度依赖useImperativeHandle可能会导致代码难以理解和维护。
 *  可能引起不必要的重新渲染：如果依赖于外部变量或状态，可能会导致不必要的组件重新渲染。使用useCallback或useMemo可以一定程度上减少这样的重新渲染。
 */

import { Card, Button } from "antd";
import React, { useRef } from "react";
import ForwardedCustomInput from "./child";

const UseImperativeHandleIndex: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    console.log('inputRef.current', inputRef.current);
    inputRef.current?.clear();
  }

  return (
    <Card>
      <h2>useImperativeHandle</h2>
      <ForwardedCustomInput ref={inputRef} />
      <Button onClick={handleClear}>Clear</Button>
    </Card>
  )
}

export default UseImperativeHandleIndex;