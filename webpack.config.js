const { resolve } = require('path');
const webpack = require('webpack');
const EnvironmentPlugin = webpack.EnvironmentPlugin;
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
	entry: resolve(__dirname, './src/index.jsx'),
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.less'],
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				include: [
					resolve(__dirname, './src'),
				],
				test: /\.jsx?$/,
			},
			{
				loader: 'style-loader!css-loader!less-loader',
				test: /\.(css|less)?$/,
			},
			{
				loader: 'file-loader',
				test: /\.(eot|ttf|woff)?$/,
			},
		],
	},
	plugins: [
		new HTMLPlugin({
			template: resolve(__dirname, './src/index.html'),
		}),
		new EnvironmentPlugin({
			'NODE_ENV': 'development',
		}),
	],
	devtool: 'source-map',
};
