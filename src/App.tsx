import { useEffect, useMemo } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider, useLinkClickHandler, useRoutes } from 'react-router-dom'
import AsyncComponent from '@src/components/AsyncComponent'
import routes, { routesInfo } from './routes'

import './App.less'


// 引入src下全部.tsx文件 https://cn.vitejs.dev/guide/features.html#glob-import
const modules = import.meta.glob('../**/*.tsx');
console.log(modules)
// 构建routes
const generateRoutes = (routes: routesInfo[]): RouteObject[] => {
  return routes.map(({ src, children,...ret }) => ({
    element: src?<AsyncComponent loader={modules[`./${src}.tsx`]} />:ret.element,
    children: children && generateRoutes(children),
    ...ret
  }));
};

const router=createBrowserRouter(generateRoutes(routes))

function App() {
  return <RouterProvider router={router} />
}

export default App

