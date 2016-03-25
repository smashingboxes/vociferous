var HtmlWebpackPlugin = require('html-webpack-plugin');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var environment = 'development';

var plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    hash: environment !== 'development',
    inject: 'body',
    template: 'src/client/index.html',
    title: 'Vociferous'
  })
];

module.exports = {
  entry: {
    'bundle.js': './src/client/index.js'
  },
  output: {
    filename: '[name]',
    path: './public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },
  plugins: plugins
}
