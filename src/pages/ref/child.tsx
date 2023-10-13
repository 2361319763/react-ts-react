/**
 * useImperativeHandle
 * useImperativeHandle 是 React 中的一个 Hook，它能让你自定义的 ref，命令式方法，值 暴露给父组件
 */

import React, { useRef, useState, useImperativeHandle,ForwardedRef } from 'react';

interface useImperativeInterface {
  name: String;
  inputRef: React.RefObject<HTMLInputElement>;
  focus(): void;
}

const RefChild = React.forwardRef((props, ref:ForwardedRef<useImperativeInterface | HTMLDivElement>) => {
  const [name, setName] = useState<string>('Ref Child');
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
      name,
      inputRef,
      focus() {
        inputRef.current?.focus();
      }
  }),[]);

  return (
    <div>
      <h2>{ name }</h2>
      <label>子组件</label>
      <input type="text" ref={ inputRef } value={ name } onChange={ (e) => setName(e.target.value)} />
    </div>
  );
})
export default RefChild;