import { useMemo, useState } from "react";

/**
 * useMemo
 * 作用: 在组件重新渲染时缓存计算的结果, 类似 Vue 中的计算属性
 * 语法: useMemo(() => { ... }, [依赖项])
 */

const sum = (a, b) => {
  console.log("function executed");
  return a + b;
};

const App = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  // 只有当 a 发生变化时才会重新计算 result 的值
  const result = useMemo(() => sum(a, b), [a]);

  return (
    <div>
      <h1>useMemo</h1>
      <p>Result: {result}</p>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>
  );
};

export default App;
