import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// 路由
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 1. 创建路由对象
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>首页</h1>,
  },
  {
    path: "/login",
    element: <h1>登录页面</h1>,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
