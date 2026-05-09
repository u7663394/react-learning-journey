import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login 登录</h1>
      {/* 声明式导航: 在 Link 组件中添加 to 属性指定跳转路径 */}
      <Link to="/">跳转到首页</Link>
    </div>
  );
};

export default Login;
