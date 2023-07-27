const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const entry = {};


module.exports = {
	watch: true,
	devtool: 'inline-source-map',
	module: {
	    rules: [
		  {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		  },
		  {
			test: /\.js$/,
			exclude: /node_modules/,
			use: [
			    {
				  loader: 'babel-loader',
				  options: {
					presets: [['@babel/preset-env', { modules: false }]]
				  }
			    }
			]
		  },
		  {
			test: /\.(vert|frag|obj)$/i,
			use: 'raw-loader',
		  }
	    ],
	},
	optimization: {
		minimize: true,
		minimizer: [
		    new TerserPlugin({
			  test: /\.js(\?.*)?$/i,
		    })
		],
	  },
	entry: {
		main: './src/index.js',
		app: './src/app.js',
		fluid:'./src/fluid.js',
	  },
	  output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	  } 
  };