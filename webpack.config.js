var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './beSimple.webpack.js',
	output: { 
		path: __dirname + '/build',
		filename: 'beSimple.js'
	}
}