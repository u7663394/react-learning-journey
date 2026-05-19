import { forwardRef, useRef } from "react";

/**
 * forwardRef
 * 作用: 使用 ref 暴露 DOM 节点给父组件
 * 语法: forwardRef((props, ref) => { ... })
 */

const Child = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const App = () => {
  const inpRef = useRef();

  return (
    <div>
      <Child ref={inpRef} />
      <button onClick={() => inpRef.current.focus()}>Focus Input</button>
    </div>
  );
};

export default App;
