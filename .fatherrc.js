export default {
  esm: 'rollup',
  // cjs: 'rollup',
  cssModules: true,
  umd: {
    name: 'td',
    // globals: {
    //   react: 'React',
    // },
  },
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