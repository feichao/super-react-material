var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  context: __dirname,//path.join(__dirname, 'app'),
  entry: {
    scripts: './app/index.jsx'
  },
  output: {
    filename: './assets/scripts/[name].[hash].js'
  },
  plugins: [
    
  ],
  module: {
    preLoaders: [{
      test: /\.jsx$/,
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
