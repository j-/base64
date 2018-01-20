const path = require('path');
const webpack = require('webpack');
const EnvironmentPlugin = webpack.EnvironmentPlugin;
const HTMLPlugin = require('html-webpack-plugin');

const resolve = (relative) => path.resolve(__dirname, relative);

module.exports = {
	entry: resolve('./src/index.jsx'),
	output: {
		path: resolve('./dist'),
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
					resolve('./src'),
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
			template: resolve('./src/index.html'),
		}),
		new EnvironmentPlugin({
			'NODE_ENV': 'development',
		}),
	],
	devtool: 'source-map',
};
