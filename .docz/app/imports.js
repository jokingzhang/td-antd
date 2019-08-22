export const imports = {
  'src/descList/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-desc-list-index" */ 'src/descList/index.mdx'
    ),
  'src/linkBtn/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-link-btn-index" */ 'src/linkBtn/index.mdx'
    ),
}
