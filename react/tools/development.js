const { merge } = require('webpack-merge');
const config = require('./base');
const webpack = require('webpack');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    port: 3000,
    contentBase: __dirname + '../public',
    inline: true,
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
