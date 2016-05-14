const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './client/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/static/build/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.BROWSER': true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ["es2015", "react", "stage-0"]
      },
      exclude: /node_modules/,
      include: path.resolve(__dirname, 'client/app.js')
    },
    {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ["es2015", "react", "stage-0"]
      }
    }]
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
};
