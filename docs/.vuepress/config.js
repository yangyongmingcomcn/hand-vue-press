const moment = require("moment");
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');

module.exports = {
  title: "智协供应链交付规范文档",
  base: "/hand-vue-press/",
  plugins: {
    '@vuepress/back-to-top': true,
    "@vuepress/last-updated": {
      transformer: (timestamp) => {
        moment.locale("zh-cn");
        return moment(timestamp).format("LLLL");
      },
    },
  },
  themeConfig: {
    lastUpdated: "更新时间",
    nav: navConf,
    sidebar: sidebarConf
    // sidebar: {
    //   "/front/": ["develop_standard", "cux_standard"],
    //   "/back/": ["develop_standard", "cux_standard"],
    // },
  },
};
