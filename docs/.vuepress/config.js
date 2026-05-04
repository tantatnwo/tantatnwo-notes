const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "tantatnwo-notes",
  description: 'vdoing博客主题模板',
  base: '/tantatnwo-notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  plugins: [
    // vssue 评论插件
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "Ov23li4h909iccrTVMlF",
        clientSecret: "9080a115a26ed2c4b1c63ced3d76d55d2af22fe4",
        owner: "tantatnwo",
        repo: "tantatnwo-notes",
      },
    ],
    // Markdown 增强
    [
      "md-enhance",
      {
        // 启用流程图
        flowchart: true,
        // Enable mermaid
        mermaid: true,
        // 启用 TeX 支持
        tex: true,
      },
    ],
  ],
}