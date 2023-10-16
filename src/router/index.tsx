import { Routes, Route } from 'react-router-dom';
import constantRoutes from './constant';
import basicRoutes from './basic';

const routes = [ ...constantRoutes, ...basicRoutes ];

const routerIndex = () => {
  return (
    <Routes>
      {
        routes.map((item) => (<Route key={item.id || item.path} {...item} />))
      }
    </Routes>
  );
}

export default routerIndex;