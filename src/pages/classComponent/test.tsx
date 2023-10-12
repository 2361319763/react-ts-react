import React from 'react';
import Demo from './index';
const demoProps = {
  name: '张三',
  age: 12,
}
const Test: React.FC = () => {
  return <Demo {...demoProps} />;
}

export default Test;

