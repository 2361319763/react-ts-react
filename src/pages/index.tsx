import { useState } from 'react';
import '@/assets/style/global.scss';
import { Card } from 'antd';

function Index() {
  const [ count, setCounts ] = useState('非受控组件')

  return (
    <Card 
      hoverable 
      bordered={false}
    >
      <h2>vite4+react+ts</h2>
      <p className='text-lime-400'>受控组件</p>
      <input type="text" value={count} onChange={ (e)=>setCounts(e.target.value) } />
      <br />
      <p>非受控组件</p>
      <input type="text" />
    </Card>
  )
}
export default Index;