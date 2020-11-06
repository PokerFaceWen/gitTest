const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config')
moudel.exports=webpackMerge(baseConfig,{
  plugins: [
    new UglifyJsWebpackPlugin()
  ]
});