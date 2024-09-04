const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: path.resolve(__dirname, './src/pages/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'About me',
      template: path.resolve(__dirname, './src/pages/about.html'),
      filename: 'about.html'
    }),
    new CopyPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }]
    })
  ],
  devServer: {
    port: 8080
  }
};
