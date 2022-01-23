const { merge } = require('webpack-merge');
const common = require('./common.js');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
  },

  // externals: {
  //   'react': 'commonjs react',
  //   'react-dom': 'commonjs react-dom',
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    // Typescript(타입스크립트)의 컴파일 속도 향상을 위한 플러그인을 설정
    new ForkTsCheckerWebpackPlugin(),
  ],
});
