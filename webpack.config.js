'use strict';

const path = require('path');
const proxy = require('./server/webpack-dev-proxy');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
  entry: {
    app: './src/index.ts',
    vendor: './src/vendor.ts',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ?
      '[name].[chunkhash].js' : '[name].js',
    publicPath: '/',
    sourceMapFilename: process.env.NODE_ENV === 'production' ?
      '[name].[chunkhash].js.map' : '[name].js.map',
    chunkFilename: process.env.NODE_ENV === 'production' ?
      '[name].chunk.[chunkhash].js' : '[name].js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: { extensions: ['.webpack.js', '.web.js', '.ts', '.js'] },
  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: Object.assign({}, proxy(), { '/api/*': 'http://localhost:3000' }),
  },

  module: {
    rules: [
      loaders.tslint,
      loaders.ts,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
  },
};
