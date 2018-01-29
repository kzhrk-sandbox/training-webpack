const webpack = require('webpack');
const path = require('path');

module.exports = [{
  // alias.js
  entry: {
    alias: './src/js/alias.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/js')
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  }
},{
  // commons.js
  entry: {
    commons: './src/js/commons.js',
    vendors: 'jquery'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/js')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name     : 'vendors',
      minChunks : Infinity
    })
  ]
},{
  // import.js
  entry: {
    import: './src/js/import.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/js')
  }
},{
  // provide.js
  entry: {
    provide: './src/js/provide.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/js')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}];
