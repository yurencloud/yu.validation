const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './test/tests',

	output: {
		filename: 'tests.bundle.js',
		path: path.resolve(__dirname, 'test')
	},

	module: {
		rules: []
	},

	plugins: [new UglifyJSPlugin()]
};
