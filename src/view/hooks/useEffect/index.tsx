/**
 * useEffect
 * useEffect 在整个页面渲染完成才调用
 * 
 * useLayoutEffect
 * useLayoutEffect 和原来 componentDidMount & componentDidupdate 一致,在 react 完成 DOM 更新后马上同步调用
 * 
 * useLayoutEffect 的性能不如 useEffect
 * 
 * 在实际使用时如果想避免页面抖动(在 useeffect 里修改DOM很有可能出现)的话，
 * 可以把需要操作DOM的代码放在useLayoutEffect 里。
 * 在这里做点dom操作，
 * 这些dom修改会和 react 做出的更改一起被一次性渲染到屏幕上，
 * 只有一次回流、重绘的代价。
 */

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Card, Button } from 'antd';

const useEffectIndex: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  useLayoutEffect(()=>{
    console.log('useLayoutEffect');
    console.log(document.getElementById('btn'));
  },[])

  useEffect(()=>{
    console.log('useEffect');
    console.log(document.getElementById('btn'));
    window.onresize = () => {
      console.log('resolve');
    }
    const timer = setInterval(()=>{
      console.log('setInterval');
    }, 1000)

    // 模拟组件销毁
    return () => {
      console.log('组件销毁');
      window.onresize = null;
      clearInterval(timer);
    }
  },[])

  useEffect(()=>{
    console.log('useEffect - ', count);
  },[count])


  return (
    <Card>
      <h2>useEffect</h2>
      <p>{ count }</p>
      <Button id='btn' onClick={()=>setCount(count+1)}>Add</Button>
    </Card>
  )
}

export default useEffectIndex;