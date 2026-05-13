import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList: (state, action) => {
      state.billList = action.payload;
    },
    addBill: (state, action) => {
      state.billList.push(action.payload);
    },
  },
});

// 异步获取
const fetchBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8888/ka");
    dispatch(setBillList(res.data));
  };
};

// 异步添加
const addBillList = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8888/ka", data);
    dispatch(addBill(res.data));
  };
};

const { setBillList, addBill } = billStore.actions;
const billReducer = billStore.reducer;

export default billReducer;
export { setBillList, addBill, fetchBillList, addBillList };
