import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * 通过 createSlice 创建子 store
 *   1. name: store 的名字
 *   2. initialState: 初始化状态
 *   3. reducers: 定义 actions 函数
 */
const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

/**
 * 获取 actions 和 reducer
 */
const { setChannels } = channelStore.actions;
const channelReducer = channelStore.reducer;

/**
 * 异步请求: 函数内部 retrun 新函数
 */
const fetchChannels = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(res.data.data.channels));
  };
};

/**
 * 按需导出 actions
 * 默认导出 reducer
 */
export { fetchChannels };
export default channelReducer;
