import { useState } from 'react'
import TabName from './child'

export default function Tab() {
  const [serverUrl, setServerUrl] = useState<string | undefined>('https://');
  // 父组件接收子组件的值并修改
  const changeMsg = (msg?:string) => {
    setServerUrl(msg);
  };

  return(
    <div className='tab'>
        <div className='box'>
          <TabName msg={serverUrl} changeMsg={changeMsg} />
        </div>
    </div>
  );
}