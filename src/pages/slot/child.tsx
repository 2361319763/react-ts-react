import React, { useEffect, ReactNode } from 'react';
import { Card } from 'antd';

interface PropsInterface {
  slot?: ReactNode;
  children?: ReactNode;
}

const SlotChild: React.FC<PropsInterface> = (props) => {
  // 获取父组件的属性
  const { slot } = props;

  useEffect(()=>{
    console.log('slot', props);
    
  },[])
  return <Card>
    { slot }
    { props.children }
  </Card>;
}
export default SlotChild;