import React from "react";

/**
 * 通过 JS 中的类来组织组件的代码
 * 语法:
 *   1. 类属性 state 定义状态数据
 *   2. setState 方法更新状态数据
 *   3. render 方法返回 JSX 结构
 */

class Counter extends React.Component {
  // 定义状态数据
  state = {
    count: 0,
  };
  // 更新状态数据的方法
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // render 返回 JSX 结构
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
