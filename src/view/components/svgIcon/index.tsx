import React from 'react';
import { Card } from 'antd';
import SvgIcon from '@/components/SvgIcon';

const SvgIconIndex: React.FC = () => {
  return (
    <Card>
      <h2>SvgIcon</h2>
      <SvgIcon svgName='apple' svgClass='icon-top' />
      <SvgIcon svgName='my' color='pink' svgClass='icon-my' />
      <SvgIcon svgName='loop' color='#1db02e' />
      <SvgIcon svgName='loading' color='#1db02e' />
    </Card>
  )
}

export default SvgIconIndex;