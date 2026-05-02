import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";

/**
 * 通过 configureStore 配置总 store
 *   1. reducer: 一个对象，包含多个子模块的 reducer
 */
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
