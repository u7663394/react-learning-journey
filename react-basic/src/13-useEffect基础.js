import { useEffect, useState } from "react";

/**
 * Hooks -- useEffect 的使用
 *
 * 作用: 在组件生命周期的三个阶段 (挂载, 更新, 卸载)
 * 执行网络请求, 浏览器 API 等副作用操作 (side effects)
 *
 * 语法: useEffect(EffectCallback, DependencyArray)
 *   1. EffectCallback: 副作用代码(回调函数)
 *   2. DependencyArray: 依赖项数组, 控制副作用函数的执行时机, 可选
 *
 * 官方解释: 连接外部系统 (服务器, 浏览器)
 */

const ChatRoom = ({ roomId }) => {
  // 1. 挂载时, 和默认聊天室建立连接
  useEffect(() => {
    console.log("建立连接:", roomId);
  }, []);

  // 2. 更新时, 和最新的聊天室建立连接 (挂载时也会执行)
  useEffect(() => {
    console.log("更新连接:", roomId);
  }, [roomId]);

  // 3. 卸载时, 和聊天室断开连接 (回调中 return 的函数会在组件卸载时执行)
  useEffect(() => {
    return () => {
      console.log("断开连接");
    };
  }, []);

  return (
    <div className="chat-room">
      <h1>欢迎来到 {roomId} 房间!</h1>
    </div>
  );
};

const App = () => {
  // 房间 id
  const [roomId, setRoomId] = useState("react");
  // 是否正在聊天
  const [isChatting, setIsChatting] = useState(true);

  return (
    <div className="app">
      <button onClick={() => setIsChatting(!isChatting)}>
        {isChatting ? "退出聊天" : "开始聊天"}
      </button>

      {isChatting ? (
        <div>
          <label>
            选择聊天室:
            <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select>
          </label>
          <ChatRoom roomId={roomId} />
        </div>
      ) : (
        <p>点击 开始聊天 按钮开始聊天~</p>
      )}
    </div>
  );
};

root.render(<App />);
