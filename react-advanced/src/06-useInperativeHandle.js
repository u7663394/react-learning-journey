import { forwardRef, useImperativeHandle, useRef } from "react";

/**
 * useImperativeHandle
 * 作用: 通过 ref 暴露子组件中的方法
 * 语法: useImperativeHandle(ref, () => { ... })
 */

const Child = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  // 将 focusInput 方法暴露给父组件
  useImperativeHandle(ref, () => {
    return { focusInput };
  });

  return <input type="text" ref={inputRef} />;
});

const App = () => {
  const inpRef = useRef();
  return (
    <div>
      <Child ref={inpRef} />
      <button onClick={() => inpRef.current.focusInput()}>Focus Input</button>
    </div>
  );
};

export default App;
