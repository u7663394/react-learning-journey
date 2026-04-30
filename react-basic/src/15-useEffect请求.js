import classNames from "classnames";
import "./index.css";
import { useEffect, useState } from "react";

/**
 * useEffect 的应用: 发送请求
 *
 * 组件渲染时, 发送请求获取数据:
 *   1. 调用 useEffect, 依赖项数组为空
 *   2. 在 useEffect 内部创建一个新 async 函数, 在函数内部发送请求
 *   3. 在 useEffect 内部调用这个 async 函数
 *
 * 原因:
 *   1. useEffect 的回调函数是同步函数, 不能直接 async 修饰
 *   2. 写在内部可以避免每次渲染都会创建新的 loadData
 */

const defaultTodos = [];

// 子组件
const Todo = ({ id, text, done, onToggle }) => {
  return (
    <div className={classNames("todo", { "todo-done": done })}>
      <div>{text}</div>
      {/* 子组件调用修改函数 */}
      <button onClick={() => onToggle(id)}>X</button>
    </div>
  );
};

// 父组件
const App = () => {
  // 0. 组件渲染时, 发送请求获取数据
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("http://localhost:8080/todos");
      setTodos(await res.json());
    };
    loadData();
  }, []);

  // 1. 父数据
  const [todos, setTodos] = useState(defaultTodos);
  // 2. 父修改函数
  const onToggle = (id) => {
    const newList = todos.map((ele) => {
      return ele.id === id ? { ...ele, done: !ele.done } : ele;
    });
    setTodos(newList);
  };
  return (
    <div className="app">
      <h3>待办任务列表: </h3>
      {todos.map((ele) => (
        // 3. props 传递数据与修改函数
        <Todo
          key={ele.id}
          id={ele.id}
          text={ele.text}
          done={ele.done}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

root.render(<App />);
