module.exports={
	entry:'./main.js',
	output:{
		filename:"./bundle.js"
	},
	module:{
	rules: [
	            {
	              test: /\.css$/,
	              use: [ 'style-loader', 'css-loader' ]
	            },{
	               test:/\.(png|jpg|gif)/ ,
	               use:[{
	                   loader:'url-loader',
	                   options:{
	                       limit:500000 //图片大小小鱼5000000，打包成databete64
	                   },

	               }]
	            }
	          ]
	}
}