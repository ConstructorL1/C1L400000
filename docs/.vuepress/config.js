// https://vuepress.vuejs.org/guide/directory-structure.html

const navConf = require("./config/navConf");
const headConf = require("./config/headConf");
const pluginConf = require("./config/pluginConf");

// https://vuepress.vuejs.org/guide/basic-config.html#config-file
module.exports = {
  title: '',
  description: '',
  head: headConf,
  plugins: pluginConf,

  base: '/C1L400000/',
 
  themeConfig: {
    // https://vuepress.vuejs.org/theme/default-theme-config.html
    nav: navConf,

    repo: 'ConstructorL1/C1L400000',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'master',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
  }
}