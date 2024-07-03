const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');

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
  },
  plugins: [
    new Dotenv({
      path: "./.env.local"
    })
  ]
});