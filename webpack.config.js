const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		vendors: './app/vendors.js',
		bundle: './app/main.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './app/wpk')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}]
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?minimize&sourceMap'
			})
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
			})
		}, {
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					minimize: true
				}
			}],
		}]
	},
	devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendors']
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			uglifyOptions: {
				warnings: false
			}
		})
	]
};
