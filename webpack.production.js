var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
		'./src/scripts/index.js'
	],
  output: {
    filename: 'dagobert.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: '',
	module: {
	     rules: [
				 {
					 test: /\.js$/,
					 exclude: /(node_modules|bower_components)/,
					 use: {
						 loader: 'babel-loader',
					 }
				 },
				 {
				 	test: /\.(scss|css)$/,
					use: [{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					}, {
						loader: 'sass-loader'
					}]
				},
        {
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
              options: {
                name: '/images/[name].[ext]'
              }
						}
					]
				},
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
				}
			 ]
		 },
		 plugins: [
			 	new webpack.HotModuleReplacementPlugin(), // Hot reloading
	 			new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors

		 		// Declare global variables
		 		new webpack.ProvidePlugin({
		 			React: 'react',
		 			ReactDOM: 'react-dom',
		 			_: 'lodash'
		 		}),
	 	    new HtmlWebpackPlugin({
	 	        filename: 'index.html',
	 	        template: './src/index.html',
	 	        hash: false
	 	    })
		 ]
}
