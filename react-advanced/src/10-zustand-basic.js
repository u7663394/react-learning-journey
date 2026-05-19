import { create } from "zustand";

// 1. 创建 store
const counterStore = create((set) => {
  return {
    // 2. 定义状态
    count: 0,
    // 3. 修改状态的方法
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
      set((state) => ({ count: state.count - 1 }));
    },
    setCount: (value) => {
      set({ count: value });
    },
  };
});

const App = () => {
  // 4. 使用 store
  const { count, increment, decrement, setCount } = counterStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
