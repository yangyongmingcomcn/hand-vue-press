const navConf = require("./config/navConf.js");
const pluginConf = require("./config/pluginConf.js");

module.exports = {
  title: "智协供应链 - 前端知识库",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  base: "/hand-vue-press/",
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: "更新时间",
    nav: navConf,
  },
};
