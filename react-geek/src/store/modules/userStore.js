import { createSlice } from "@reduxjs/toolkit";
import request from "@/utils/request";

// user 子仓库
const userStore = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token_key") || "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token_key", action.payload);
    },
  },
});

// 异步获取 token
const fetchToken = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm);
    const token = res.data.token;
    dispatch(setToken(token));
  };
};

// 拆出 action 和 reducer
const { setToken } = userStore.actions;
const userReducer = userStore.reducer;

// 按需导出 action, 默认导出 reducer
export { setToken, fetchToken };
export default userReducer;
