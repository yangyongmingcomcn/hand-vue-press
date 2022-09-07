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
  },
};
