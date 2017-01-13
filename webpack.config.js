let path = require("path");
module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: './dist'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.js$/,
			//exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {

		}
	}
}