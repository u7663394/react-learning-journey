import { Button } from "antd-mobile";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Button color="primary">测试全局</Button>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
