/**
 * React component: is a JavaScript function
 * that you can sprinkle with markup.
 *
 * 注意:
 *   1. 组件名称首字母必须大写
 *   2. 逻辑写在组件函数体内
 */

// 1. 创建
const MyApp = () => {
  const handelClick = () => {
    alert("MyApp Component has been clicked");
  };
  return (
    <div className="app" onClick={handelClick}>
      MyApp Component
    </div>
  );
};

// 2. 使用
root.render(
  <div>
    <MyApp />
    <App />
  </div>,
);
