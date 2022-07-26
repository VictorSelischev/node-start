const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  stats: 'errors-only',
  entry: './src/index.js',
  output: {
    filename: 'webpack-demo.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    // client: {
    //   logging: 'none',
    //   progress: true,
    // },
    port: 7777,
    // stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.sсss$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new CleanWebpackPlugin(),
  ],
};