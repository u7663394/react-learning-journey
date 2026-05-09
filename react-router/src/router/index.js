import Login from "../page/Login";
import Home from "../page/Home";
// 路由
import { createBrowserRouter } from "react-router-dom";

// 1. 创建路由对象
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login/:letter?/:num?", // params 传递参数; ? 表示可选
    element: <Login />,
  },
]);

// 2. 导出路由
export default router;
