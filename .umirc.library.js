export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'tdAntd',
    globals: {
      react: 'React',
    },
  },
  doc: {
    // themeConfig: { mode: 'dark' }
    base: '/td-antd/',
    // public: '/public',
    htmlContext: {
      head: {
        scripts: [
          { src: './public/redirect.js' },
        ],
      },
    },
  },
}