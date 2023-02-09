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
    sidebar: {
      "/front/": [
        {
          title: "前端开发规范",
          collapsable: true,
          sidebarDepth: 1,
          children: ["/front/README"],
        },
      ],
      "/components/": [
        {
          title: "前端组件库",
          collapsable: true,
          sidebarDepth: 1,
          children: ["/components/README"],
        },
      ],
      "/debugging/": [
        {
          title: "前端调试技巧",
          collapsable: true,
          sidebarDepth: 1,
          children: ["/debugging/README"],
        },
      ],
    },
  },
};
