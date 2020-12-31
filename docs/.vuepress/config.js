module.exports = {
  title: "vimi-ui",
  description: "A Vue.js 2.0 UI Toolkit for Web",
  base: "/vimi-ui/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/csdoker/vimi-ui" }
    ],
    sidebar: [
      {
        title: "使用",
        collapsable: false,
        children: ["/get-started/"]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "/components/button",
          "/components/checkbox",
          "/components/input",
          "/components/pager",
          "/components/switch",
          "/components/tabs",
          "/components/carousel"
        ]
      }
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-task-lists"));
    }
  }
};
