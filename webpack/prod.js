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
});
