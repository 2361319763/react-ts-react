import { useEffect, useState } from 'react';

export default function watchIndex() {
  let [serverUrl, setServerUrl] = useState('https://localhost:1234');
  let [age, setAge] = useState(2);

  /**
   * useEffect第二个参数中所传递的值才会进行根据值的变化而出发;
   * 如果没有穿值的话,就不会监听数据变化
   */
  useEffect(() => {
    console.log(age,"age");
  },[age])
  useEffect(() => {
    console.log(serverUrl,"serverUrl");
  },[serverUrl])

  return (
    <div>
      <p>age: {age}</p>
      <p>serverUrl: {serverUrl}</p>

      <button onClick={() => setAge(age + 1)}>age + 1</button>
      <button onClick={() => setServerUrl(serverUrl + '1')}>serverUrl + 1</button>
    </div>
  )
}