const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    index2: "./src/index2.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".js"]
  }
};
