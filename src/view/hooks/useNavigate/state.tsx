import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'antd';

const useNavigateState: React.FC = () => {
  const { state } = useLocation();
  const [ name, setName ] = useState<string|null>(null);

  useEffect(()=>{
    setName(state.name);
    console.log(state);
  },[])

  return (
    <Card>
      <h2>useNavigate - State</h2>
      <p>{ name }</p>
    </Card>
  );
}

export default useNavigateState;