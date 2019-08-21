const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const plugins = [
  new OptimizeCss(),
  new MiniCssExtractPlugin({
    filename: '[name]/index.css',
    chunkFilename: '[name]/index.css',
  }),
];

const config = {
  entry: {
    descList: './src/components/descList/index.js',
    formItem: './src/components/formItem/index.js',
    linkBtn: './src/components/linkBtn/index.js',
    modalBox: './src/components/modalBox/index.js',
    selectMap: './src/components/selectMap/index.js',
    tagWithAddon: './src/components/tagWithAddon/index.js',
    inputNumberWithUnit: './src/components/inputNumberWithUnit/index.js',
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, '../es'),
    libraryTarget: 'umd',
    library: 'ReactCmp',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: ['babel-loader'],
      }, {
        test: /\.css|\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
  },
  // 插件功能
  plugins: plugins,
  externals: [nodeExternals()],
};

module.exports = config;
