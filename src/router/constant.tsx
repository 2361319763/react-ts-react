import { RouteInterface } from './basic'
import NotFound from '@/view/404';
import Redirect from '@/view/redirect';

const constantRoutes: RouteInterface[] = [
  {
    path: '*',
    id: 'NoFound',
    element: <NotFound />,
    auth: false
  },{
    path: '/redirect',
    id:'redirect',
    element: <Redirect />,
    auth: false
  }
];

export default constantRoutes;

