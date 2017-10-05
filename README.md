# react-startup

This project contains basic structure for starting a React Project.

Download this and start creating React App.

OR

Setup your own project by following below steps
1. npm init
2. npm install --save react react-dom
3. npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-1
4. add following line(property) in package.json in "script" object.
	```
	 "start": "webpack-dev-server"
	```
5. Create "webpack.config.js" file and copy following content in it.
	```
	const path=require('path');
	module.exports = {
		entry: './src/index.js',
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{
				test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
				}
			]
		}
	}
	```
6. Create ".babelrc" file and copy following content in it.
	```	
	{
		"presets" : ["es2015", "react", "stage-1"]
	}
	```
7. Create "index.html" file and copy following content in it.
	```
	<!DOCTYPE html>
	<html>
		<body>
			<div class="container" id="root"></div>
		</body>
		<script src="/bundle.js"></script>
	</html>
	```
8. Create "src" folder and create "index.js" file inside it and copy following content in it.
	```
	import React, {Component} from 'react';
	import {render} from 'react-dom';
	import App from '../components/app';

	function App() {
		return <div> Hello World!!! </div>
	};

	const target = document.getElementById("root");

	render(<App />, target);
	```
9. Run your project using "npm start"
