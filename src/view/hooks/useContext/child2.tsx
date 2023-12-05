import React, { useContext } from 'react';
import { Button } from 'antd';
import { GlobalContext } from './index';

const Child2: React.FC = () => {

  const global = useContext(GlobalContext);

  return (
    <div>
        <p>{ global?.name } - { global?.info }</p>
        <Button onClick={()=>global?.setInfo("Child2")}>Child2</Button>
    </div>
  );
}

export default Child2;