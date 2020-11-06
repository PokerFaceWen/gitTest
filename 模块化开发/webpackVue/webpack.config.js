const path=require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack=require('webpack');
const HtmlWebPackPlugin=require('html-webpack-plugin');
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8196,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('*webpack Vue Study\n' + ' * (c) 2020 WenXuan Hu\n' + ' * Released under the MIT License.'),
    new HtmlWebPackPlugin()
  ]
}