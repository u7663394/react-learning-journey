import { useEffect } from "react";
import { create } from "zustand";

// 1. 创建 store
const channelStore = create((set) => {
  return {
    // 2. 定义状态
    channelList: [],
    // 3. 修改状态的方法
    fetchChannels: async () => {
      const res = await fetch("http://geek.itheima.net/v1_0/channels");
      const data = await res.json();
      set({ channelList: data.data.channels });
    },
  };
});

const App = () => {
  // 4. 使用 store
  const { channelList, fetchChannels } = channelStore();

  useEffect(() => {
    fetchChannels();
  }, []);

  return (
    <div>
      <h1>Channel List</h1>
      <ul>
        {channelList.map((ele) => (
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
