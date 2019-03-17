const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/components/map/index.js',
    './src/components/search-input/index.js',
    './src/components/search-results/index.js',
    './src/index.scss'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './dist/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Google Geocoding Example',
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
