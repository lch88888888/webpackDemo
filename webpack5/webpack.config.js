const path =require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin= require('html-webpack-plugin');
module.exports={
	entry:__dirname+'/main.js',
	output:{
		path:__dirname+'/dist/',
		filename:"bundle.js"
	},
	plugins:[
 new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./index.html'
        })

	]
}