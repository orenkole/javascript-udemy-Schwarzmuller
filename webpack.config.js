const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./section22/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "section22", "assets", "scripts"),
    publicPath: 'assets/scripts/',
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: './'
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};