const path = require("path");
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env, options) => {
  return {
    entry: [
      path.resolve(__dirname, "src", "index.tsx"),
      path.resolve(__dirname, "src/sass", "main.scss"),
    ],
    mode: "development",
    output: {
      filename: "bundle.js",
      chunkFilename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        "environments/environment": path.resolve(__dirname,`src/environments/${options.mode}.tsx`),
      },
      plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.json" })]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["ts-loader"],
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true },
            },
            {
              loader: "postcss-loader",
              options: { sourceMap: true },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, ""),
      port: 3000,
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "css/[name].css" }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new ESLintPlugin({ extensions: ["js", "ts", "tsx"] }),
      new Dotenv({systemvars: true})
    ],
  };
};
