import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const modules = import.meta.glob("@/pages/**/*.tsx",{
  eager: true,
  import: 'default'
});

const paramsList = ['/hooks/useNavigate/params'];

const constantRoutes: RouteObject[] = [
  {
    path: '*',
    Component: React.lazy(() => import("@/pages/404")),
  }
];

const setPath = (path:string)=>{
  const isPatamsPage = paramsList.indexOf(path);
  if (path=='/index') {
    return '/';
  } else if (isPatamsPage != -1) {
    return path + '/:value';
  } else {
    return path;
  }
}

const basicRoutes = Object.entries(modules).map(([pagePath, config])=>{
  const path = pagePath.replace('/src/pages', '').replace('.tsx', '');
  const name = pagePath.split('/').filter(Boolean).join('-') || 'index';
  return {
    path: setPath(path),
    name,
    Component: modules[pagePath],
    mate: config
  }
}) as RouteObject[];

const routes = createBrowserRouter([ ...constantRoutes, ...basicRoutes ]);

export default routes;