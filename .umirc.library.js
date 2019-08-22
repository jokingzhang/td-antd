export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'tdAntd',
    globals: {
      react: 'React',
    },
  }
}