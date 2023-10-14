import React, { useState } from 'react';
import { Button } from 'antd';
import UseEffectIndex from './index';

const useEffectTest: React.FC = () => {
  
  const [show, setShow] = useState<boolean>(true);

  return (
    <div>
      { show && <UseEffectIndex /> }
      <Button onClick={()=>setShow(!show)}>{ show ? '隐藏' : '显示'}</Button>
    </div>
  )
}

export default useEffectTest;