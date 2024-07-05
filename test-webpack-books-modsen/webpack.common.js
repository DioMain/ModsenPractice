/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".scss"]
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /mode_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Dotenv(),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
};