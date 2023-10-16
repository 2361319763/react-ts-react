import React from 'react';

export interface RouteInterface {
  path: string,
  id: string,
  Component?: React.ComponentType | null,
  element?: React.ReactNode | null;
}
const paramsList = ['/hooks/useNavigate/params'];

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

const modules = import.meta.glob("@/pages/**/*.tsx",{
  eager: true,
  import: 'default'
});

const basicRoutes = Object.entries(modules).map(([pagePath,config])=>{
  const path = pagePath.replace('/src/pages', '').replace('.tsx', '');
  const id = pagePath.split('/').filter(Boolean).join('-') || 'index';
  return {
    path: setPath(path),
    id,
    Component: modules[pagePath]
  }
}) as RouteInterface[];

export default basicRoutes;