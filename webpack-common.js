var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

var _vendors = [
  'react',
  'react-bootstrap',
  'classnames'
];

module.exports = {

  entry: {
    app: path.resolve(ROOT_PATH, 'examples/app.js'),
    vendors: _vendors
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
    publicPath: '/react-editable/build/'
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: [
          path.resolve(ROOT_PATH, 'examples'),
          path.resolve(ROOT_PATH, 'src'),
        ]
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.resolve(ROOT_PATH, 'examples'),
          path.resolve(ROOT_PATH, 'src'),
        ]
      },
      {
        // inline base64 URLs for <=8k images
        test: /\.(png|jpg|eot|ttf|svg|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test:/\.txt$/,
        loader: 'raw-loader',
        include: path.resolve(ROOT_PATH, 'examples')
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React-editable',
      template: 'template.html'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]

};