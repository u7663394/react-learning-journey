import { useEffect } from "react";
import { create } from "zustand";

// 1. count 切片
const counterStore = (set) => {
  return {
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
      set((state) => ({ count: state.count - 1 }));
    },
    setCount: (value) => {
      set({ count: value });
    },
  };
};

// 2. channel 切片
const channelStore = (set) => {
  return {
    channelList: [],
    fetchChannels: async () => {
      const res = await fetch("http://geek.itheima.net/v1_0/channels");
      const data = await res.json();
      set({ channelList: data.data.channels });
    },
  };
};

// 3. 组合切片
const rootStore = create((...args) => {
  return {
    ...counterStore(...args),
    ...channelStore(...args),
  };
});

const App = () => {
  // 4. 使用 store
  const { count, increment, decrement, setCount } = rootStore();
  const { channelList, fetchChannels } = rootStore();

  useEffect(() => {
    fetchChannels();
  }, []);

  return (
    <div>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <hr />
      <div>
        <h2>Channel List</h2>
        <ul>
          {channelList.map((ele) => (
            <li key={ele.id}>{ele.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
