const moment = require("moment");

module.exports = {
  "@vuepress/back-to-top": true,
  "@vuepress/last-updated": {
    transformer: (timestamp) => {
      moment.locale("zh-cn");
      return moment(timestamp).format("LLLL");
    },
  },
  "vuepress-plugin-auto-sidebar": {
    sidebarDepth: 4,
    title: {
      mode: "titlecase",
      map: {
        "/standard/": "智协供应链 - 前端开发规范",
        "/components/": "前端组件库",
        "/debugging/": "前端调试技巧",
        "/training/": "新人指引",
      },
    },
  },
};
