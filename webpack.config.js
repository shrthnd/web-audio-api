const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devServer: {
    static: './build'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    clean: true,
  }
};