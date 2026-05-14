const path = require("path");

module.exports = {
  webpack: {
    // 路径别名: @ 代表 src
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
