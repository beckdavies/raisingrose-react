var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {  
  entry: [
    './app/index.js',
    './app/scss/styles.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        exclude: /node_modules/,
        loader: 'babel-loader' 
      },
      { 
        test: /\.css?$/, 
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader'] 
      },
      {
          test: /\.(sass|scss)$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract(
              [
                  'css-loader', 
                  'sass-loader'
              ]
          )
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      // define which file to use as a template
      template: './app/index.html'
    }),
    new ExtractTextPlugin({ 
      // define where to save the file
      filename: "styles_bundle.css",
      allChunks: true,
    }),
  ]
}


// const webpack = require("webpack"),
//     ExtractTextPlugin = require('extract-text-webpack-plugin'),
//     HtmlWebpackPlugin = require('html-webpack-plugin'),
//     path = require("path"),
//     JS_BUILD_DIR = path.resolve(__dirname, "static/js"),
//     JS_APP_DIR = path.resolve(__dirname, "src/js"),
//     CSS_BUILD_DIR = path.resolve(__dirname, "static/css"),
//     CSS_APP_DIR = path.resolve(__dirname, "src/scss");


// var config = {
//     entry: [
//         //JS_APP_DIR + "/index.js",
//         './app/src/js/index.js',
//         './app/src/scss/styles.scss'
//         //CSS_APP_DIR + "/styles.scss"
//     ],
//     output: {
//         path: JS_BUILD_DIR,
//         filename: "app.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js?/,
//                 include: JS_APP_DIR,
//                 loader: "babel-loader"
//             },
//             {
//                 test: /\.css$/,
//                 loader: "style-loader!css-loader"
//             },
//             {
//                 test: /\.(sass|scss)$/,
//                 loader: ExtractTextPlugin.extract(
//                     [
//                         'css-loader', 
//                         'sass-loader'
//                     ]
//                 )
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin({ // define where to save the file
//             filename: "../css/styles.bundle.css",
//             allChunks: true,
//         }),
//     ]
// };

// module.exports = config;

//this

