const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const {merge} = require("webpack-merge");
const common = require('./common.js');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    port: 3000,
  },


});