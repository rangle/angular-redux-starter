'use strict';

exports.tslint = {
  enforce: 'pre',
  test: /\.ts$/,
  loader: 'tslint-loader',
  exclude: /node_modules/,
};

exports.istanbulInstrumenter = {
  enforce: 'post',
  test: /^(.(?!\.(spec|entry)))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.ts = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader',
  exclude: /node_modules/,
};

exports.html = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css-loader?-minimize!postcss-loader',
  exclude: /node_modules/,
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url-loader',
    exclude: /node_modules/,
  };
}
