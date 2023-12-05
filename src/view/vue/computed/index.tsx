/**
 * useMemo
 * useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果
 */

import { useState, useMemo } from 'react';

export default function computedIndex() {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  let [age, setAge] = useState(2);

  const name = useMemo(() => {
    return serverUrl + " " + age;
  }, [age]);

  const handleCilck = () => {
    setAge(++age)
  }

  return (
    <div>
      <h1>Computed</h1>
      <p>{name}</p>
      <button onClick={ ()=>handleCilck() }>+</button>
    </div>
  )
}