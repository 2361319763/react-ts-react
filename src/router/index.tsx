import { Routes, Route } from 'react-router-dom';
import constantRoutes from './constant';
import basicRoutes from './basic';
import AuthRouter from './AuthRouter';

const routes = [ ...constantRoutes, ...basicRoutes ];

const routerIndex = () => {
  return (
    <Routes>
      { 
        routes.map((item) => (<Route 
          path={item.path}
          element={
            <AuthRouter auth={item.auth} key={item.path}>
              {
                item.element || 
                (item.Component && <item.Component />) 
              }
            </AuthRouter>
          }
          key={item.path}
        />))
      }
    </Routes>
  );
}

export default routerIndex;