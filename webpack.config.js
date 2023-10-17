const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.ts",
    path: path.resolve(__dirname, "dist"),
    libaryTarget: "umd",
    clean: true,
  },
  resolve: { extesions: ["ts", "tsx"] },
  externals: {
    react: "react",
  },
  module: {
    test: /\.(ts|tsx)?$/,
    use: ["ts-loader"],
    exclude: /node_modules/,
  },
};
