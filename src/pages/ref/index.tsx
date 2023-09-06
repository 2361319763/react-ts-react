import { useRef } from 'react';

export default function RefIndex() {
  const domRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    domRef.current?.focus(); // 获取焦点
    console.log(domRef,boxRef);
  }

  return (
    <div className='home'>
      <div className='box' ref={boxRef}>
        <input type="text" ref={domRef} />
        <button onClick={handleClick}>点击</button>
      </div>
    </div>
  )
}