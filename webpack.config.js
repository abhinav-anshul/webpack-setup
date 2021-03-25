// let mode = development;

// if (process.env.NODE_ENV === "production") {
//   mode = production;
// }

module.exports = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
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
