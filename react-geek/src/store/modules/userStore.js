import { createSlice } from "@reduxjs/toolkit";
import request from "@/utils/request";
import { getToken, setLocalToken } from "@/utils/token";

// user 子仓库
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      setLocalToken(action.payload);
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
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

// 异步获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get("/user/profile");
    dispatch(setUserInfo(res.data));
  };
};

// 拆出 action 和 reducer
const { setToken, setUserInfo } = userStore.actions;
const userReducer = userStore.reducer;

// 按需导出 action, 默认导出 reducer
export { setToken, setUserInfo, fetchToken, fetchUserInfo };
export default userReducer;
