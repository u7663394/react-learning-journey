import Login from "../page/Login";
import Home from "../page/Home";
import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";
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
]);

// 2. 导出路由
export default router;
