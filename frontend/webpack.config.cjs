const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/main.jsx"),
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "merli-bot.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader",
        options: {
          limit: Infinity,
        },
      },
    ],
  },
  devServer: {
    https: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
