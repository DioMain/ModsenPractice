/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: "development",
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'static'),
    },
    compress: true,
    port: 8080,
    allowedHosts: 'all',
  }
});