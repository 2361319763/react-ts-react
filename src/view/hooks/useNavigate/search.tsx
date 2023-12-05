import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from 'antd';

const useNavigateSearch: React.FC = () => {
  const [  search, setsearch ] = useSearchParams();
  const [ name, setName ] = useState<string|null>(null);

  useEffect(()=>{
    let name = search.get('name');
    setName(name);
    console.log(name);
  },[])

  return (
    <Card>
      <h2>useNavigate - Search</h2>
      <p>{ name }</p>
    </Card>
  );
}

export default useNavigateSearch;