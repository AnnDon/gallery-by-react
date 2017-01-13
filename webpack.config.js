let path = require("path");
let webpack = require("webpack");
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'webpack/hot/dev-server',
		'./app/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			'react': pathToReact,
			'react-dom': pathToReactDOM
		}
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by Majy'),
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
}