import React from "react";

/**
 * 类组件的生命周期
 *   1. componentDidMount：组件挂载完成后执行 (异步数据获取)
 *   2. componentDidUpdate：组件更新完成后执行
 *   3. componentWillUnmount：组件卸载前执行 (清理副作用)
 */

class Son extends React.Component {
  componentDidMount() {
    console.log("Component did mount, fetching data...");
  }

  componentDidUpdate() {
    console.log("Component did update, data updated!");
  }

  componentWillUnmount() {
    console.log("Component will unmount, cleaning up...");
    // clearInterval(this.timer);
  }

  render() {
    return <div>Son Component</div>;
  }
}

const App = () => {
  const [count, setCount] = React.useState(0);
  const [showSon, setShowSon] = React.useState(true);

  return (
    <div>
      {showSon && <Son />}
      <button onClick={() => setCount(count + 1)}>Update: {count}</button>
      <button onClick={() => setShowSon(!showSon)}>
        {showSon ? "Unmount Son" : "Mount Son"}
      </button>
    </div>
  );
};

export default App;
