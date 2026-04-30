import classNames from "classnames";
import "./index.css";
import { useState } from "react";

/**
 * 父子组件通信
 *   1. 父 -> 子：通过 props 传递数据
 *   2. 子 -> 父：父组件传递修改函数给子组件, 子组件调用此函数
 */

const defaultTodos = [
  { id: 1, text: "吃饭", done: false },
  { id: 2, text: "休息", done: true },
  { id: 3, text: "学 React", done: false },
];

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
