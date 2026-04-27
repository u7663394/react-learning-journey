/**
 * 渲染一个 h1 元素, 内容为 Hello, React!
 */

// 1. 导包
import React from "react";
import { createRoot } from "react-dom/client";

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
