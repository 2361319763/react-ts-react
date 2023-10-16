import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "antd";
import { ReducerInterface } from '@/redux/reducers';
// import "./es6-生成器/生成器"
// import "./es6-生成器/可执行生成器"

const reduxSagaIndex: React.FC = () => {
  const user = useSelector((state:ReducerInterface) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>reduxSaga</h2>
      <p>姓名 — { user.name }</p>
      <p>年龄 — { user.age }</p>
      <p>性别 — { user.sex }</p>
      <p>电话 — { user.phone }</p>
      <Button onClick={()=>dispatch({type:"GET_INFO"})}>获取用户信息</Button>
    </div>
  )
}

export default reduxSagaIndex;