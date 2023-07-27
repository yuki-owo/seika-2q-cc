module.exports = {
	watch: true,
	devtool: 'inline-source-map',
	module: {
	    rules: [
		  {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		  },
	    ],
	},
  };