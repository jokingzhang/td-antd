export default {
  cssModules: true,
  esm: 'rollup',
  // cjs: 'rollup',
  // // 默认是 .module.css 走 css modules，.css 不走 css modules。配置 cssModules 为 true 后，全部 css 文件都走 css modules。（less 文件同理）
  umd: false,
  // umd: {
  //   name: 'td',
  //   globals: {
  //     react: 'React',
  //   },
  // },
  doc: {
    // repository: false,
    themeConfig: {
      // mode: 'dark',
      // showPlaygroundEditor: false
    },
    base: '/td-antd/',
    // public: '/public',
    htmlContext: {
      head: {
        scripts: [
          { src: './public/redirect.js' },
        ],
        links: [
          { rel: 'stylesheet', href: './public/common.css' },
        ],
      },
    },
    menu: [
      '首页',
      '更新日志',
      {
        name: '组件',
        menu: [
          'LinkBtn',
        ]
      }
    ]
  },
}