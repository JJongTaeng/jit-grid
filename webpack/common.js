const { merge } = require('webpack-merge');
const common = require('./common.js');
const path = require("path");

module.exports = merge(common, {

  entry: './src/index.tsx',

  module: {
    rules: [
      // Webpack(웹팩)에서 Typescript(타입스크립트)를 사용하기 위해 js|jsx를 ts|tsx로 수정 후 ts-loader를 추가
      // ts-loader의 옵션은 성능 향상을 위해서
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  }
})