const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/js')
  }
};
