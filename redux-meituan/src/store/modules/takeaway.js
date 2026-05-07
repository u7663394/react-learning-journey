import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 1. createSlice() 创建子 store
const foodStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
    activeIndex: 0,
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
  },
});

const { setFoodsList, setActiveIndex } = foodStore.actions;
const takeawayReducer = foodStore.reducer;

// 2. 异步请求数据
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodsList(res.data));
  };
};

// 3. 导出 action 和 reducer
export { fetchFoodsList, setActiveIndex };
export default takeawayReducer;
