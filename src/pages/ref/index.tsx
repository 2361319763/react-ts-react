import { useRef } from 'react';
import { Button } from 'antd';
import RefChild from './child';

export default function RefIndex() {
  const domRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    domRef.current?.focus(); // 获取焦点
  }
  const handleChildClick = () => {
    childRef.current?.focus();
  }
  const getLog = () => {
    console.log(domRef,boxRef,childRef);
  }

  return (
    <div className='home'>
      <div className='box' ref={boxRef}>
        <label>父组件</label>
        <input type="text" ref={domRef} />
        <RefChild ref={ childRef } />
        <Button onClick={ () => handleClick() }>父组件获取焦点</Button>
        <br />
        <Button onClick={ () => handleChildClick() }>子组件获取焦点</Button>
        <br />
        <Button onClick={ () => getLog() }>打印</Button>
      </div>
    </div>
  )
}