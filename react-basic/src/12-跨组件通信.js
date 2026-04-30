import { createContext, useContext, useState } from "react";

/**
 * 后代组件/跨组件通信
 *
 * Context: 无视组件层级关系, 跨组件通讯
 * (类比 Vue 中的 provide & inject)
 *
 * 语法:
 *   1. 创建 Context 对象 -> createContext()
 *   2. 划定范围, 提供共享数据 -> <Context.Provider value={共享数据}>
 *   3. 范围内的组件获取共享数据 -> useContext(Context)
 */

const ThemeContext = createContext();

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Menu />
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <MenuItem />
        <MenuItem />
      </ul>
    </div>
  );
};

const MenuItem = () => {
  const { theme } = useContext(ThemeContext);
  return <li style={{ color: theme }}>菜单</li>;
};

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="content">
      <div className="main" style={{ color: theme }}>
        Context 跨组件通信
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  const { onReset } = useContext(ThemeContext);
  return (
    <div className="footer">
      <button onClick={onReset}>重置主题</button>
    </div>
  );
};

// 父组件
const App = () => {
  // 共享 theme 数据
  const [theme, setTheme] = useState("#1677FF");
  // 修改 theme 数据的函数
  const onReset = () => {
    setTheme("#1677FF");
  };
  return (
    <div className="app">
      <ThemeContext.Provider value={{ theme, onReset }}>
        <input
          className="theme-selector"
          type="color"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
        <div className="main">
          <Sidebar />
          <Content />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

root.render(<App />);
