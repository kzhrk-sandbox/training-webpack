const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './src/js/main.js',
    vendors: ['jquery']
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
  ],
  resolve: {
    extensions: ['.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
};
