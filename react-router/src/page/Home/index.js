import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home 首页</h1>
      {/* 命令式导航: 使用 useNavigate 钩子进行编程式跳转 */}
      <button onClick={() => navigate("/login")}>跳转到登陆页</button>
    </div>
  );
};

export default Home;
