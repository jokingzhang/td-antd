const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals'); // 忽略 node_modules 进项目，并告知寄主有哪些依赖

const config = {
  mode: 'production', // production
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
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
  // 插件功能
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: 'index.css',
    }),
  ],
  externals: [nodeExternals()],
};

module.exports = config;
