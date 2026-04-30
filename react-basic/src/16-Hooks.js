/**
 * React Hooks (v16.8+)
 *
 * 解释: 以 use 开头的函数
 * 如 useState/useEffect/useContext 等
 *
 * 作用: 为组件提供不同的 React 特性
 * 如 状态管理/副作用处理/上下文访问 等
 *
 * 规则: 只能在组件的顶层调用, 不能嵌套在 if/for/其他函数 中
 *
 * 原因: React 组件依赖 Hooks 的调用顺序
 * 必须保证所有 Hooks 在每次渲染时调用顺序一致
 */

const App = () => {
  // 错误: 不能在条件语句中调用 Hook
  // if (Math.random() > 0.5) {
  //   const [count, setCount] = useState(0);
  // }
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <h1>计数器: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
