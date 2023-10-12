import { useState } from 'react';
import { Button } from 'antd';

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

  const listItem = list.map((oi,index)=>{
    return <div key={ "item_" + index }>{oi.name}</div>
  });

  const addEventListener = () => {
    setList([...list, { name: '赵六', age: 34 }]);
  }

  const removeEventListener = (index: number) => {
    let newList = list.concat();
    newList.splice(index,1);
    setList(newList);
  }

  return (
      <div>
        { listItem }
        <hr />
        <Button onClick={()=>addEventListener()}>添加</Button>
        {
          list.map((oi,index)=>{
            return (
              <div key={"item_" + index} className="flex">
                <div className='main-list-title'>{oi.name} {oi.age}岁</div>
                <Button onClick={()=>removeEventListener(index)}>删除</Button>
              </div> 
            )
          })
        }
        {
          list.length === 0 && <div>暂无数据</div>
        }
      </div>
  )
}