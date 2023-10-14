import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';

const useNavigateParams: React.FC = () => {
  const params = useParams();
  const [ name, setName ] = useState<string|null>(null);

  useEffect(()=>{
    setName(params?.value ?? '');
    console.log(params);
  },[])

  return (
    <Card>
      <h2>useNavigate - Params</h2>
      <p>{ name }</p>
    </Card>
  );
}

export default useNavigateParams;