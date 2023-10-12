import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const modules = import.meta.glob("@/pages/**/*.tsx",{
  eager: true,
  import: 'default'
});

const defaultRoutes: RouteObject[] = [
  {
    path: '*',
    Component: React.lazy(() => import("@/pages/404")),
  }
];

const routelist = Object.entries(modules).map(([pagePath, config])=>{
  const path = pagePath.replace('/src/pages', '').replace('.tsx', '');
  const name = pagePath.split('/').filter(Boolean).join('-') || 'index';
  return {
    path: path=='/index'?'/':path,
    name,
    // 这不能这样写，生产环境会有问题
    Component: modules[pagePath],
    mate: config
  }
}) as RouteObject[];

routelist.push

const routes = createBrowserRouter([ ...defaultRoutes, ...routelist ]);

export default routes;