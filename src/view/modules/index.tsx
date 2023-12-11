import React from 'react';
import { Card } from 'antd';
import User from './user'
import Count from './count'

const modulesIndex: React.FC = () => {
  return (
    <Card>
      <h2>@reduxjs/toolkit</h2>
      <User />
      <Count />
    </Card>
  )
}

export default modulesIndex;