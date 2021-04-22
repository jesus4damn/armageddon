const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.tsx'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'docs')
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico'),
          to: path.resolve(__dirname, 'docs/assets')
        },
        {
          context: path.resolve(__dirname),
          from: path.resolve(__dirname, 'src/assets/manifest.json'),
          to: path.resolve(__dirname, 'docs/assets')
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|ttf|otf|woff|woff2|eot)$/,
        use: ["file-loader"]
      }
    ]
  }
}