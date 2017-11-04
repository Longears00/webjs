const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'babel-loader',  exclude: /node_modules/ },
    ],
  },
};
