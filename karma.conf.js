'use strict';

process.env.TEST = true;

const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = (config) => {
  const coverage = config.singleRun ? ['coverage'] : [];

  config.set({
    mime: { 'text/x-typescript': ['ts', 'tsx'] },
    frameworks: [
      'jasmine',
    ],

    plugins: [
      'karma-jasmine',
      'karma-sourcemap-writer',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-remap-coverage',
      'karma-spec-reporter',
      'karma-chrome-launcher',
    ],

    files: [
      './src/tests.entry.ts',
      {
        pattern: '**/*.map',
        served: true,
        included: false,
        watched: true,
      },
    ],

    preprocessors: {
      './src/tests.entry.ts': [
        'webpack',
        'sourcemap',
      ],
      './src/**/!(*.spec).(ts|js)': [
        'sourcemap',
      ],
    },

    webpack: {
      entry: './src/tests.entry.ts',
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader?module=commonjs',
            exclude: /node_modules/,
          },
          loaders.html,
          { test: /\.(css|svg|eot|woff|woff2|ttf)/, use: 'null-loader' },
        ].concat(config.singleRun ? [loaders.istanbulInstrumenter] : []),
      },
      stats: { colors: true, reasons: true },
      plugins,
    },

    webpackServer: {
      noInfo: true, // prevent console spamming when running in Karma!
    },

    reporters: ['spec']
      .concat(coverage)
      .concat(coverage.length > 0 ? ['remap-coverage'] : []),

    // only output json report to be remapped by remap-istanbul
    coverageReporter: {
      type: 'in-memory',
      check: {
        global: {
          statements: 50,
          branches: 50,
          functions: 50,
          lines: 50,
        },
        each: {
          statements: 50,
          branches: 50,
          functions: 50,
          lines: 50,
        },
      },
    },

    remapCoverageReporter: {
      html: './coverage',
      json: './coverage/coverage.json',
    },

    port: 9999,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
  });
};
