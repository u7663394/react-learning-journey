import { memo, useState } from "react";

/**
 * React.memo
 * 作用: 允许组件在 Props 没有改变的情况下跳过重新渲染
 * 默认渲染机制: 父组件重新渲染时，子组件也会重新渲染
 * 语法: const newComponent = React.memo(Component)
 */

const Son = (props) => {
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
      {/* <Son /> */}
      <MemoSon />
    </div>
  );
};

export default App;
