import { useReducer } from "react";

/**
 * useReducer 的使用:
 *   1. 定义 reducer 函数, 根据不同的 action.type 来更新 state
 *   2. 组件中调用 useReducer -> useReducer(reducer, init)
 *   3. 调用 dispatch(action) 来触发 state 的更新
 */

// 1. 定义 reducer 函数
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

// 2. 组件中调用 useReducer
function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  // 3. 调用 dispatch(action) 来触发 state 的更新
  return (
    <div className="App">
      <h1>React Advanced</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "SET", payload: 100 })}>
        Set to 100
      </button>
    </div>
  );
}

export default App;
