import React, { forwardRef, useState } from 'react';
import { Input } from 'antd';
import type { InputRef } from 'antd';

const forwardRefChild: React.FC = forwardRef<InputRef>((props,ref) => {
  const [name,setName] = useState<string>('forward')
  return (
    <div>
      <p>Child</p>
      <Input ref={ ref } value={ name } onChange={(e)=>setName(e.target.value)} />
    </div>
  )
})

export default forwardRefChild;