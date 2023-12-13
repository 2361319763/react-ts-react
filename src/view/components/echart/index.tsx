import React,{ useState } from 'react';
import { Card } from "antd";
import EchartsControl from '@/components/EchartController';

const EchartIndex: React.FC = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  return(
    <Card>
      <h2>Echarts</h2>
      <div style={{ height: 300, width: 400}}>
        <EchartsControl options={option}></EchartsControl>
      </div>
    </Card>
  )
}

export default EchartIndex;