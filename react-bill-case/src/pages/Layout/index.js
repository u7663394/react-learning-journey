import { Button } from "antd-mobile";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBillList } from "@/store/modules/billStore";

const Layout = () => {
  /**
   * 获取账单列表数据
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBillList());
  }, [dispatch]);
  return (
    <div>
      <h1>Layout</h1>
      <Button color="primary">测试全局</Button>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
