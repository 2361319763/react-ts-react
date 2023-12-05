/**
 * flushSync 
 * 允许你强制 React 在提供的回调函数内同步刷新任何更新，这将确保 DOM 立即更新
 * 在 flushSyn c中修改 state 页面会立即更新
 */

import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Card, Button } from 'antd';

const flushSyncIndex: React.FC = () => {
  const [show, setShow] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const showHandle = () => {
    flushSync(()=>{
      setShow(!show);
    })
    console.log(show,divRef);
  }
  return (
    <Card>
      <h2>flushSync</h2>
      <Button onClick={()=>showHandle()}>{show?'隐藏':'显示'}</Button>
      { show && <div style={{
        width: '200px',
        height: '200px',
        background: 'red',
      }} ref={divRef}></div>}
    </Card>
  )
}

export default flushSyncIndex;