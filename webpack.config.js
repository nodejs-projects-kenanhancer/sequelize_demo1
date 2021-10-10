// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV == "production";

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: 'source-map',
  entry: "./src/index.ts",
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
    sourceMapFilename: 'index.js.map',
    clean: true,
  },
  target: 'node',
  externals: [nodeExternals(), 'pg', 'mysql', 'mariadb', 'sqlite3', 'tedious', 'pg-hstore'],
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: /(node_modules|build)/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
