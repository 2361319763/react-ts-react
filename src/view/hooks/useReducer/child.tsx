import React from 'react';
import { Button } from 'antd';
import { useGlobalState } from './index';

const useReducerChild: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const minus = () => {
    console.log(state);
    dispatch({
      type: 'MINUS',
      payload: 2
    })
  }
  const add = () => {
    console.log(state);
    dispatch({
      type: 'ADD',
      payload: 2
    })
  }

  return (
    <div>
      <Button onClick={()=>minus()}> - </Button>
      <Button onClick={()=>add()}> + </Button>
    </div>
  )
}

export default useReducerChild;