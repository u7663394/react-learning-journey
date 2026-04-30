import { useEffect, useState } from "react";

/**
 * useEffect 的扩展:
 *   1. 一个 useEffect 负责一个完整功能
 *   2. 指定依赖项原则: 回调中使用到且可变 (如 props/state 等)
 */

const ChatRoom = ({ roomId }) => {
  useEffect(() => {
    // 挂载和更新时触发
    console.log("建立连接:", roomId);
    // 卸载(清理)时触发
    return () => {
      console.log(`${roomId}断开连接`);
    };
  }, [roomId]);

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
