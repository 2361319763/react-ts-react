import React from 'react';
import { Button } from 'antd';
import store from '@/redux/store'

const reduxChild: React.FC = () => {

  const dispatch = () => {
    store.dispatch({
      type: 'SET_NAME',
      payload: 'reduxChild'
    })
  }

  return (
    <div>
      <h2>reduxChild</h2>
      <Button onClick={()=>{dispatch()}}>发布</Button>
    </div>
  )
}

export default reduxChild;