var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var uglifyPlugin = webpack.optimize.UplifyJsPlugin
var config = {
  entry:path.resolve(__dirname,'./src/index.js'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_module/
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader',
        include:path.resolve(__dirname,'src')
      },
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'搭建前端工作流',
      template:'./src/index.html'
    }),
    new uglifyPlugin({
      compress:false
    })
  ]
}

module.exports = config
