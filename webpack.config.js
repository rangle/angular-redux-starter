const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const proxy = require('./server/webpack-dev-proxy');
const loaders = require('./webpack/loaders');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body'
  })
];

const devPlugins = [
  new webpack.NoErrorsPlugin(),
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {

  entry: {
    app: './src/index.ts',
    vendor: [
      'es5-shim',
      'es6-shim',
      'es6-promise',
      'immutable',
      'angular',
      'ngcomponentrouter',
      'redux',
      'redux-thunk',
      'ng-redux',
      'redux-logger'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: "/",
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: proxy(),
  },

  module: {
    preLoaders: [
      loaders.tslint
    ],
    loaders: [
      loaders.ts,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ]
  },

  postcss: function() {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-cssnext')({
        browsers: ['ie >= 8', 'last 2 versions']
      }),
    ];
  }
};
