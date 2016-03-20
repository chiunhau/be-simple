var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './test.js',
	output: { 
		path: __dirname,
		filename: 'test.bundle.js'
	}
}