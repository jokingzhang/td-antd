export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'tdAntd',
    // globals: {
    //   react: 'React',
    // },
  },
  doc: {
    // repository: false,
    themeConfig: {
      // mode: 'dark',
      showPlaygroundEditor: false
    },
    base: '/td-antd/',
    // public: '/public',
    htmlContext: {
      head: {
        scripts: [
          { src: './public/redirect.js' },
        ],
      },
    },
    menu: [
      '首页',
      '更新日志',
      {
        name: '组件',
        // menu: [
        //   'DescList',
        //   'DragModal',
        // ]
      }
    ]
  },
}