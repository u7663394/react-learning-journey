// 用户相关请求
import request from "@/utils/request";

// 1. 登录接口 (获取 token)
export const loginAPI = (loginForm) => {
  return request({
    url: "/authorizations",
    method: "POST",
    data: loginForm,
  });
};

// 2. 获取用户信息
export const getUserInfoAPI = () => {
  return request({
    url: "/user/profile",
    method: "GET",
  });
};
