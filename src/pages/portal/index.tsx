/**
 * 将组件渲染在根节点之外
 * 时间冒泡依然存在原位置
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import Dialog from './Dialog';
import "./index.scss";

const portalIndex: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='box' onClick={()=>console.log('box上的点击事件')}>
      <div className='box-left'></div>
      <div className='box-right'>
        { show && <Dialog onClose={()=>setShow(false)} /> }
      </div>
      <Button className='btn' onClick={()=>setShow(true)}>显示</Button>
    </div>
  )
}

export default portalIndex;