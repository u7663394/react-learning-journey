/**
 * 渲染一个 h1 元素, 内容为 Hello, React!
 */

// 1. 导包
import { createRoot } from "react-dom/client";

// 2. 创建 React 根对象
const root = createRoot(document.querySelector("#root"));
console.log(root);

// 3. 调用 render 方法渲染 (JSX)
root.render(<h1>Hello, React!</h1>);
