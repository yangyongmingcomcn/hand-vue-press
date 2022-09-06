const navConf = require('./config/navConf.js');
const pluginConf = require('./config/pluginConf.js');

module.exports = {
  title: "智协供应链交付规范文档",
  base: "/hand-vue-press/",
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: "更新时间",
    nav: navConf,
  },
};
