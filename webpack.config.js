const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');

const isAnalyze = process.env.ANALYZE === 'true';
const plugins = [
  new CleanWebpackPlugin('./dist'),
  new OptimizeCss(),
  new MiniCssExtractPlugin({
    filename: 'index.css',
    chunkFilename: 'index.css',
  }),
];
isAnalyze && plugins.push(new BundleAnalyzerPlugin());

const config = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
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
  // 插件功能
  plugins: plugins,
  externals: [nodeExternals()],
};

module.exports = config;
