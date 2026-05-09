import Login from "../page/Login";
import Home from "../page/Home";
import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";
import NotFound from "../page/NotFound";
// 路由 -> history 模式
import { createBrowserRouter } from "react-router-dom";

// 1. 创建路由对象
// const router = createHashRouter([]); // hash 模式
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login/:letter?/:num?", // params 传递参数; ? 表示可选
    element: <Login />,
  },
  {
    path: "/layout",
    element: <Layout />,
    // 嵌套路由
    children: [
      // index: true 默认子路由
      { index: true, element: <About /> },
      { path: "about", element: <About /> },
      { path: "board", element: <Board /> },
    ],
  },
  // Not Found 兜底路由
  {
    path: "*",
    element: <NotFound />,
  },
]);

// 2. 导出路由
export default router;
