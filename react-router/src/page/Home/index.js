import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home 首页</h1>
      {/* 命令式导航: 使用 useNavigate 钩子进行编程式跳转 */}
      <button onClick={() => navigate("/login")}>跳转到登陆页</button>
      {/* 查询参数传参 */}
      <button onClick={() => navigate("/login?id=123&name=zhangsan")}>
        查询参数传参
      </button>
      {/* params 传参 */}
      <button onClick={() => navigate("/login/abc/1001")}>params 传参</button>
    </div>
  );
};

export default Home;
