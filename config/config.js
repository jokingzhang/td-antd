const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isAnalyze = process.env.ANALYZE === 'true';
const plugins = [
  new OptimizeCss(),
  new MiniCssExtractPlugin({
    filename: 'index.css',
    chunkFilename: 'index.css',
  }),
];

isAnalyze && plugins.push(new BundleAnalyzerPlugin());

if (process.env.MODE === 'DEV') {
  // dev 环境打包，将 index.less 复制到 dist目录下，以供在本地测试时使用
  plugins.push(new CopyWebpackPlugin([
    { from: 'src/index.less' },
  ]));
}

const config = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
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
