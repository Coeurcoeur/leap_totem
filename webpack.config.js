var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: './src/scripts/index.js'
	},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
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
 					test: /\.(eot|ttf|woff|woff2)$/,
 					use: [
 						{
 							loader: 'file-loader',
               options: {
                 name: 'build/fonts/[name]-[hash:8].[ext]'
               }
 						}
 					]
 				},
				 {
				 	test: /\.(scss|css)$/,
					use: [{
						loader: 'style-loader',
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
                name: 'build/img/[name]-[hash:8].[ext]'
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
     optimization: {
      minimizer: [
        new UglifyJSPlugin({
          sourceMap: true,
          uglifyOptions: {
            compress: {
              inline: false
            }
          }
        })
      ],
      runtimeChunk: false,
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor_app',
            chunks: 'all',
            minChunks: 2
          }
        }
      }
    },
    devServer: {
      historyApiFallback: true,
      host : '0.0.0.0',
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
