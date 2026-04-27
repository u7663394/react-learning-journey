/**
 * 渲染一个 h1 元素, 内容为 Hello, React!
 */

// 1. 导包
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 2. 创建 React 根对象
const root = createRoot(document.querySelector("#root"));
console.log(root);

// 3. 调用 render 方法渲染 (JSX)
root.render(<h1>Hello, React!</h1>);

/**
 * JSX: a syntax extension for JavaScript that lets you
 * write HTML-like markup inside a JavaScript file.
 *
 * 规则:
 *   1. JSX 必须有且只有一个根节点
 *   2. 标签必须闭合
 *   3. 属性必须使用驼峰命名法 e.g. className
 *
 * 原理: JSX 本质上是 JS 对象 {type, props}
 *   - React.createElement(type, props, ...children)
 *   - type: 标签名
 *   - props: 属性对象
 *   - children: 子元素
 */

root.render(
  <div>
    <h1>Hello, JSX!</h1>
    <p> this is a paragraph </p>
  </div>,
);

console.log(<h1 className="title">Hello</h1>);
console.log(React.createElement("h1", { className: "title" }, "Hello"));

/**
 * JSX 中 {} 的应用
 *
 * 常见场景:
 *   1. 列表渲染 (e.g. map)
 *     - map 方法
 *     - key 属性需要唯一
 *   2. 条件渲染 (e.g. &&, ?:)
 *     - && 一个内容, 渲染 or 不渲染
 *     - ?: 两个内容, 渲染 A or 渲染 B
 *   3. 样式处理 (e.g. className)
 */
const categories = [
  { id: 1, name: "Recommend" },
  { id: 2, name: "Small Combo" },
  { id: 3, name: "Dessert" },
  { id: 4, name: "Entry" },
  { id: 5, name: "Main Meal" },
];

const selectedId = 2;

root.render(
  <div style={{ width: "80px" }}>
    <ul className="list">
      {categories.map((ele, index) => {
        return (
          <li
            key={ele.id}
            className={
              ele.id === selectedId ? "list-item selected" : "list-item"
            }
          >
            {index === 0 && <span>🔥</span>}
            {ele.name}
          </li>
        );
      })}
    </ul>
  </div>,
);

/**
 * React 事件绑定
 *
 * 语法: on + 事件名 = {事件处理函数}
 *   1. 事件名使用驼峰命名法 e.g. onClick
 */

const handleClick = (e) => {
  e.preventDefault();
  alert("link has been clicked");
};

root.render(
  <div>
    <div
      className="box"
      onClick={() => {
        alert("box has been clicked");
      }}
    />
    <a href="https://github.com/u7663394/" onClick={handleClick}>
      Github
    </a>
  </div>,
);
