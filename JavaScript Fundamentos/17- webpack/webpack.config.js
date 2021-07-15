const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require("webpac4k");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader", // Adicionar CSS a DOM injetando a tag <style>
          "css-loader", // interpretar @import, url()...
          "sass-loader",
        ],
      },
    ],
  },
};
