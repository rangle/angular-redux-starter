'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcss = require('./postcss');

const sourceMap = process.env.TEST
  ? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.ts$/ })]
  : [ ];

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    __TEST__: JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: false,
    chunksSortMode: (chunk1, chunk2) => {
      const order = ['app', 'vendor'];
      const item1 = order.indexOf(chunk1.names[0]);
      const item2 = order.indexOf(chunk2.names[0]);

      if (item1 > item2) {
        return 1;
      } else if (item1 < item2) {
        return -1;
      }

      return 0;
    },
  }),
  new ExtractTextPlugin('styles.[contenthash].css'),
  new webpack.NoEmitOnErrorsPlugin(),
  new CopyWebpackPlugin([
    { from: 'src/assets', to: 'assets' },
  ]),
  new webpack.LoaderOptionsPlugin({
    test: /\.css$/,
    options: {
      postcss,
    },
  }),
].concat(sourceMap);

const devPlugins = [
  new StyleLintPlugin({
    configFile: './.stylelintrc',
    files: ['src/**/*.css'],
    failOnError: false,
  }),
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    mangle: {
      keep_fnames: true,
    },
    compress: {
      warnings: false,
    },
  }),
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
