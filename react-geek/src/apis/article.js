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

// 3. 获取文章列表
export const getArticleListAPI = (params) => {
  return request({
    method: "GET",
    url: "/mp/articles",
    params,
  });
};

// 4. 删除文章
export const deleteArticleAPI = (id) => {
  return request({
    method: "DELETE",
    url: `/mp/articles/${id}`,
  });
};

// 5. 获取文章详情
export const getArticleDetailAPI = (id) => {
  return request({
    method: "GET",
    url: `/mp/articles/${id}`,
  });
};

// 6. 更新文章
export const updateArticleAPI = (data) => {
  return request({
    method: "PUT",
    url: `/mp/articles/${data.id}?draft=false`,
    data,
  });
};
