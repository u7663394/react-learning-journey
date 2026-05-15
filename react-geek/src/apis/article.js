// 文章相关请求
import request from "@/utils/request";

// 1. 获取频道列表
export const getChannelsAPI = () => {
  return request({
    method: "GET",
    url: "/channels",
  });
};
