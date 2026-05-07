import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addValue } from "./store/modules/counterStore";
import { useEffect } from "react";
import { fetchChannels } from "./store/modules/channelStore";

const App = () => {
  // 1. useSelector 得到 store 中的状态
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  // 2. useDispatch 得到 dispatch 方法
  const dispatch = useDispatch();
  // 3. 在组件加载时，获取频道列表
  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  return (
    <div>
      <h1>React Redux App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addValue(5))}>Add 5</button>
      <button onClick={() => dispatch(addValue(-3))}>Subtract 3</button>
      <hr />
      <h2>Channel List</h2>
      <ul>
        {channelList.map((ele) => (
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
