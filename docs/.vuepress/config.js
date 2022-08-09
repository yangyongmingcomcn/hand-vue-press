module.exports = {
  title: "智协供应链交付规范文档",
  base: "/hand-vue-press/",
  themeConfig: {
    lastUpdated: "更新时间",
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/front/develop_standard" },
      { text: "后端", link: "/back/develop_standard" },
      { text: "猪齿鱼平台", link: "https://open-console.going-link.com/" },
      { text: "GitLab", link: "https://open-gitlab.going-link.com/" },
      { text: "OP环境", link: "https://isrm-op-dev.going-link.com/" },
    ],
    // sidebar: [
    //   {
    //     title: "前端",
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: ["/front/develop_standard", "/front/cux_standard"],
    //   },
    //   {
    //     title: "后端",
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: ["/back/develop_standard", "/back/cux_standard"],
    //   },
    // ],
    sidebar: {
      "/front/": ["develop_standard", "cux_standard"],
      "/back/": ["develop_standard", "cux_standard"],
    },
  },
};
