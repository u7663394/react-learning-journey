import { configureStore } from "@reduxjs/toolkit";
import takeawayReducer from "./modules/takeaway";

// configureStore() 配置总 store
const store = configureStore({
  reducer: {
    foods: takeawayReducer,
  },
});

export default store;
