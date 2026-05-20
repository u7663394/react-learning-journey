import { useEffect, useRef } from "react";

/**
 * useRef 用于获取 dom 元素
 *   1. 把 dom 元素的类型当成泛型参数传入 useRef 中
 *   2. 自动推导出 ref.current 的类型
 */

const App = () => {
  const inpRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inpRef.current?.focus();
  }, []);

  const timerRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      console.log("定时器执行了");
    }, 1000);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div>
      <input type="text" ref={inpRef} />
    </div>
  );
};

export default App;
