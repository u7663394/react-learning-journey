import React from "react";

/**
 * 类组件的组件通信
 *   1. 父传子: props 绑定数据
 *   2. 子传父: props 绑定函数, 子组件调用
 */

class Son extends React.Component {
  render() {
    return (
      <div>
        <h3>我是子组件, 我接收父组件传来的值: {this.props.msg}</h3>
        <button onClick={() => this.props.getSonMsg("Hello, Father!")}>
          点击我, 我会把消息传给父组件
        </button>
      </div>
    );
  }
}

class Father extends React.Component {
  state = {
    msg: "我是父组件",
  };

  getSonMsg = (sonMsg) => {
    console.log(sonMsg);
  };

  render() {
    return (
      <div>
        <h2>我是父组件</h2>
        <Son msg={this.state.msg} getSonMsg={this.getSonMsg} />
      </div>
    );
  }
}

export default Father;
