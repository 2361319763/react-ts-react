import { RouteInterface } from './basic'
import NotFound from '@/pages/404';
import Redirect from '@/pages/redirect';

const constantRoutes: RouteInterface[] = [
  {
    path: '*',
    id: 'NoFound',
    element: <NotFound />,
  },{
    path: '/redirect',
    id:'redirect',
    element: <Redirect />,
  }
];

export default constantRoutes;

