import { memo, useState } from "react";

/**
 * React.memo
 * 作用: 允许组件在 Props 没有改变的情况下跳过重新渲染
 * 默认渲染机制: 父组件重新渲染时，子组件也会重新渲染
 * 语法: const newComponent = React.memo(Component)
 * 比较机制:
 *   - 对每一个 prop 使用 Object.is 进行比较 (引用是否变化)
 *   - Object.is(7,7) => true
 *   - Object.is('abc','abc') => true
 *   - Object.is([],[]) => false
 *   - Object.is({a:1},{a:1}) => false
 */

const Son = ({ count }) => {
  console.log("Son组件重新渲染了");
  return <div>Son组件</div>;
};

const MemoSon = memo(Son);

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>父组件</h1>
      <button onClick={() => setCount(count + 1)}>
        点击增加count: {count}
      </button>
      <button onClick={() => setCount(0)}>重置count: {count}</button>
      {/* <Son /> */}
      <MemoSon count={count} />
    </div>
  );
};

export default App;
