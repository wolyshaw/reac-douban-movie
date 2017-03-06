const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const publicPath = 'http://192.168.10.32:' + config.port + '/'
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
module.exports = {
  entry: ['./src/index.js', hotMiddlewareScript],
  output: {
    filename: 'index.min.js',
    path: path.resolve('./dev'),
    publicPath: publicPath
  },
	resolve: {
		alias: {
			'static': path.resolve('./src/static'),
			'util': path.resolve('./src/util')
		}
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:  ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
					fullbackLoader: 'style-loader',
					loader: ['css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]']
				})
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'static', 'index_default.html'),
			title: config.site.title,
			keywords: config.site.keywords,
			description: config.site.description,
			header: config.site.header
		}),
		new ExtractTextPlugin({
			filename: 'static/style.css',
			allChunks: true
		})
  ]
}
