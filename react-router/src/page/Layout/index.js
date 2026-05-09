import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>一级路由: Layout</h1>
      <Link to="/layout/about">About</Link>
      <hr />
      <Link to="/layout/board">Board</Link>
      {/* 二级路由出口, 类比 Vue 的 <router-view> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
