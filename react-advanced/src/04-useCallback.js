import { memo, useCallback, useState } from "react";

/**
 * useCallback
 * 作用: 在组件多次渲染的时候缓存函数
 * 语法: const fn = useCallback(() => {...}, [依赖项])
 */

const Child = memo(({ onLog }) => {
  console.log("Child render");

  return (
    <div>
      <button onClick={onLog}>执行 logFn</button>
    </div>
  );
});

const App = () => {
  const [count, setCount] = useState(0);

  const logFn = useCallback(() => {
    console.log("execute logFn");
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <Child onLog={logFn} />
    </div>
  );
};

export default App;
