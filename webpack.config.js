const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isAnalyze = process.env.ANALYZE === 'true';
const isCopy = process.env.COPY === 'true';
const plugins = [
  new CleanWebpackPlugin('./dist'),
  new MiniCssExtractPlugin({
    filename: 'index.css',
    chunkFilename: 'index.css',
  }),
  new OptimizeCss(),
];

isAnalyze && plugins.push(new BundleAnalyzerPlugin());
// 将 index.less 复制到 dist目录下，以供在本地测试时使用
isCopy && plugins.push(new CopyWebpackPlugin([
  { from: 'src/index.less' },
  // {
  //   from: path.resolve(__dirname, 'src/components'),
  //   to: path.resolve(__dirname, 'lib'),
  //   ignore: ['.*'],
  // },
]));

const config = {
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
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
  },
  // 插件功能
  plugins: plugins,
  externals: [nodeExternals()],
};

module.exports = config;
