import React from 'react';
import { Tag, Button } from 'antd';
import { useAppSelector, useAppDispatch } from '@/modules/store';
import { selectCount, asyncSetCount, setCount } from '@/modules/count';

const countIndex: React.FC = () => {
  const dispatch = useAppDispatch();
  const { count, loading } = useAppSelector(selectCount);
  return (
    <div style={{
      paddingTop: '20px'
    }}>
      <Tag color="#2db7f5">Count</Tag>
      <p>{ count }</p>
      <Button 
        onClick={
          ()=>dispatch(setCount(10))
        }
      >setCount</Button>
      <Button 
        onClick={
          ()=>dispatch(asyncSetCount())
        }
        loading={loading}
      >asyncSetCount</Button>
    </div>
  )
}

export default countIndex;