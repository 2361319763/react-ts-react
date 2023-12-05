import { RouteInterface } from './basic'
import NotFound from '@/view/404';
import Redirect from '@/view/redirect';

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

