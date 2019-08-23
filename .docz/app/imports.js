export const imports = {
  'src/descList/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-desc-list-index" */ 'src/descList/index.mdx'
    ),
  'src/dragModal/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-drag-modal-index" */ 'src/dragModal/index.mdx'
    ),
  'src/formItem/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-form-item-index" */ 'src/formItem/index.mdx'
    ),
  'src/inputNumberWithUnit/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-input-number-with-unit-index" */ 'src/inputNumberWithUnit/index.mdx'
    ),
  'src/linkBtn/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-link-btn-index" */ 'src/linkBtn/index.mdx'
    ),
  'src/modalBox/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modal-box-index" */ 'src/modalBox/index.mdx'
    ),
  'src/selectMap/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-select-map-index" */ 'src/selectMap/index.mdx'
    ),
  'src/tagWithAddon/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-tag-with-addon-index" */ 'src/tagWithAddon/index.mdx'
    ),
}
