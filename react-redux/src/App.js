import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/modules/counterStore";

const App = () => {
  // 1. useSelector 得到 store 中的状态
  const { count } = useSelector((state) => state.counter);
  // 2. useDispatch 得到 dispatch 方法
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Redux App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
