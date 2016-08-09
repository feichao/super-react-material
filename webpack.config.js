var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    scripts: './demo/demo.jsx'
  },
  output: {
    filename: './dist/[name].js'
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      'plugins': [
        'esLint-plugin-react'
      ]
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['syntax-decorators', 'transform-decorators-legacy']
      }
    }]
  },
  eslint: {
    configFile: '.eslintrc'
  }
};
