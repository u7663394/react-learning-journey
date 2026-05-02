import { createSlice } from "@reduxjs/toolkit";

/**
 * 通过 createSlice 创建子 store
 *   1. name: store 的名字
 *   2. initialState: 初始化状态
 *   3. reducers: 定义 actions 函数
 */
const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

/**
 * 获取 actions 和 reducer
 */
const { increment, decrement } = counterStore.actions;
const counterReducer = counterStore.reducer;

/**
 * 按需导出 actions
 * 默认导出 reducer
 */
export { increment, decrement };
export default counterReducer;
