import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 1. createSlice() 创建子 store
const foodStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setCart(state, action) {
      const item = state.cartList.find((ele) => ele.id === action.payload.id);
      if (item) {
        // 如果已存在，增加数量
        item.count = (item.count ?? 0) + 1;
      } else {
        // 如果不存在，添加新商品
        state.cartList.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    increaseCount(state, action) {
      const item = state.cartList.find((ele) => ele.id === action.payload.id);
      item.count += 1;
    },
    decreaseCount(state, action) {
      const item = state.cartList.find((ele) => ele.id === action.payload.id);
      if (item.count > 1) {
        item.count -= 1;
      } else {
        // 数量为1再减，移除商品
        state.cartList = state.cartList.filter(
          (ele) => ele.id !== action.payload.id,
        );
      }
    },
    clearCart(state) {
      state.cartList = [];
    },
  },
});

const {
  setFoodsList,
  setActiveIndex,
  setCart,
  increaseCount,
  decreaseCount,
  clearCart,
} = foodStore.actions;
const takeawayReducer = foodStore.reducer;

// 2. 异步请求数据
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodsList(res.data));
  };
};

// 3. 导出 action 和 reducer
export {
  fetchFoodsList,
  setActiveIndex,
  setCart,
  increaseCount,
  decreaseCount,
  clearCart,
};
export default takeawayReducer;
