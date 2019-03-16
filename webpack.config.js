const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js',
    './src/index.scss'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './dist/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/index.html'

    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  }
};
