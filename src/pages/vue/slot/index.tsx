import React from 'react';
import SlotChild from './child'

const SlotIndex: React.FC = () => {
  return (
    <div>
      <SlotChild slot={
        <p>使用props实现 slot</p>
      }>
        <p>111</p>
        <p>222</p>
      </SlotChild>
    </div>
  )
}

export default SlotIndex;