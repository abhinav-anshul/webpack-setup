const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  target: "web",
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    assetModuleFilename: "images/[hash]/[ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        // type: "asset/resource", -> To generate standalone image in the  dist folder
        // type : "asset/inline", -> To generate inline images in dist/javascript file image in the dist folder
        // To let webpack decide what to put in inline and what to in images to have some optimization
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
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
    hot: true,
  },
};
