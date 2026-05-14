import { getToken } from "@/utils/token";
import { Navigate } from "react-router-dom";

/**
 * 封装高阶组件
 *   1. 有 token -> 正常渲染组件
 *   2. 无 token -> 重定向到登录页面
 */

const AuthRoute = (component) => {
  const token = getToken();
  if (token) {
    return component;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default AuthRoute;
