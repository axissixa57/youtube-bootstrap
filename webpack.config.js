const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map', // для более красивого отображения кода
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader' }, // pre значит, что перед сборкой модуля(который описан ниже в rules) проверить eslint на ошибки
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Youtube',
  })],
};
