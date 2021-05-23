const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-source-map',
  devServer: {
    port: 3000,
    contentBase: __dirname + '/public',
    inline: true,
    historyApiFallback: true,
    compress: true,
    publicPath: '/',
    hot: true,
  },
};
