
import { RouteObject } from "react-router-dom"

/**路由配置**/
export interface routesInfo extends RouteObject{
  src?:string,  // 路由
  children?:routesInfo[] //子路由
}

const routes:routesInfo[]  = [
  {
    path:"/",
    src:'pages/index',
  },
  {
    path:"/about",
    src:'pages/about',
  },
]



export default routes