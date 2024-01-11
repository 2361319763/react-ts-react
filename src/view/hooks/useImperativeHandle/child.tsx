import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Input } from 'antd';

const ForwardedCustomInput: React.FC = forwardRef((props, ref) => {
  const [value, setValue] = useState<string>('');

  useImperativeHandle(ref, () => ({
    clear: () => {
      console.log('clear');
      setValue('');
    },
    value
  }), [value]);

  return <Input value={value} onChange={e=>setValue(e.target.value)} />;
})

export default ForwardedCustomInput;
