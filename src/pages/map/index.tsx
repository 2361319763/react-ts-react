import { useState } from 'react';

export default function mapIndex() {
  //声明对象类型
  type Coordinates = {
    name:string,
    age:number
  };
	// 数组
  const [list, setList] = useState<Coordinates[]>([
    { name: '李四', age: 30 },
    { name: '王五', age: 32 },
  ]);

  const listItem = list.map((oi)=>{
    return <div key={oi.age}>{oi.name}</div>
  });

  return (
      <div>
        { listItem }
        {
          list.map((oi)=>{
            return <div className='main-list-title' key={oi.age}>{oi.name}</div>
          })
        }
      </div>
  )
}