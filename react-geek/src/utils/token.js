const TOKEN_KEY = "token_key";

// 存
const setLocalToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// 取
const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// 删
const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { setLocalToken, getToken, removeToken };
