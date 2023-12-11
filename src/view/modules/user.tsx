import React, { useEffect } from 'react';
import { Tag, Input } from 'antd';
import { useAppSelector, useAppDispatch } from '@/modules/store';
import { selectUser, getUserInfo, setName } from '@/modules/user';

const userIndex: React.FC= () => {
  const dispatch = useAppDispatch();
  const { name, age, sex, phone } = useAppSelector(selectUser);

  useEffect(()=>{
    dispatch(getUserInfo());
  }, []);

  return (
    <div>
      <Tag color="#2db7f5">User</Tag>
      <p>{ name }</p>
      <p>{ age }</p>
      <p>{ sex }</p>
      <p>{ phone }</p>
      <Input type="text" value={name} onChange={ (e)=>dispatch(setName(e.target.value)) } />
    </div>
  )
}

export default userIndex;