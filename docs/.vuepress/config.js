// vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "d3ec4ca6363950ca41a2",
        clientSecret: "897465b6393f1d663e6128d2fab6959a0c0333cc",
        owner: "lql95",
        repo: "lql-notes",
      },
    ],
  ],
