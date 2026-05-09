import { Link, useSearchParams, useParams } from "react-router-dom";

const Login = () => {
  // useSearchParams 钩子用于获取 URL 中的查询参数
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  // useParams 钩子用于获取 URL 中的 :params 参数
  const { letter, num } = useParams();
  return (
    <div>
      <h1>Login 登录</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>
        Param: {letter} - {num}
      </p>
      {/* 声明式导航: 在 Link 组件中添加 to 属性指定跳转路径 */}
      <Link to="/">跳转到首页</Link>
    </div>
  );
};

export default Login;
