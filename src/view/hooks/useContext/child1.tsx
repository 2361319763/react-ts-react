import React from 'react';
import { Button } from 'antd';
import { GlobalContext } from './index';

const Child1: React.FC = () => {
  return (
    <GlobalContext.Consumer>
      {
        (val) => <div>
          <p>{ val?.name } - { val?.info }</p>
          <Button onClick={()=>val?.setInfo("Child1")}>Child1</Button>
        </div>
      }
    </GlobalContext.Consumer>
  );
}

export default Child1;