// let mode = development;

// if (process.env.NODE_ENV === "production") {
//   mode = production;
// }

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devServer: {
    contentBase: "./dist",
    port: 9000,
  },
};
