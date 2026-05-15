// 文章相关请求
import request from "@/utils/request";

// 1. 获取频道列表
export const getChannelsAPI = () => {
  return request({
    method: "GET",
    url: "/channels",
  });
};

// 2. 发布文章
export const publishArticleAPI = (data) => {
  return request({
    method: "POST",
    url: "/mp/articles?draft=false",
    data,
  });
};
