/**
 * react-router-dom v6
 * useNavigate
 * 
 * react-router-dom v5
 * useHistory
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Input } from 'antd';

const useNavigateIndex: React.FC = () => {
  const navigate = useNavigate();
  const [ name, setName ] = useState<string>('useNavigate');

  // 跳转至历史记录页面
  const goSearch = () => {
    navigate(`/hooks/useNavigate/search?name=${name}`);
  }
  const goParams = () => {
    navigate(`/hooks/useNavigate/params/${name}`);
  }
  const goState = () => {
    navigate(`/hooks/useNavigate/state`,{ state: { name } });
  }
  return (
    <Card>
      <Input value={name} onChange={(e)=>setName(e.target.value)} />
      <Button onClick={()=>{goSearch()}}>search参数</Button>
      <Button onClick={()=>{goParams()}}>params参数</Button>
      <Button onClick={()=>{goState()}}>state参数</Button>
    </Card>
  )
}

export default useNavigateIndex;