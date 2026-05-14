import { Layout, Menu, Popconfirm } from "antd";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, fetchUserInfo } from "@/store/modules/userStore";

const { Header, Sider } = Layout;

const items = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Manage Article",
    key: "/article",
    icon: <DiffOutlined />,
  },
  {
    label: "Publish Article",
    key: "/publish",
    icon: <EditOutlined />,
  },
];

const GeekLayout = () => {
  /**
   * 菜单点击跳转
   */
  const navigate = useNavigate();
  const onMenuClick = (e) => {
    navigate(e.key);
  };

  /**
   * 根据路径高亮菜单
   *   1. 获取当前路径 -> useLocation
   *   2. selectedKeys 绑定到 Menu 上
   */
  const location = useLocation();
  const selectedKey = location.pathname;

  /**
   * 获取用户信息 -> 展示用户名
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const userInfo = useSelector((state) => state.user.userInfo);

  /**
   * 退出登录
   *   1. 删除 token 与 userInfo
   *   2. 跳转到登录页
   */
  const onConfirm = () => {
    dispatch(clearAll());
    navigate("/login");
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm
              title="Are you sure to logout?"
              okText="Logout"
              cancelText="Cancel"
              onConfirm={onConfirm}
            >
              <LogoutOutlined /> Logout
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            selectedKeys={selectedKey}
            onClick={onMenuClick}
            mode="inline"
            theme="dark"
            items={items}
            style={{ height: "100%", borderRight: 0 }}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeekLayout;
