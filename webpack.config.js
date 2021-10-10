// Generated using webpack-cli https://github.com/webpack/webpack-cli

const glob = require('glob');
const fs = require('fs');
const path = require("path");
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV == "production";

const modelsEntry = glob.sync('./src/db/models/**.ts').reduce(function (obj, el) {
  obj[`models/${path.parse(el).name}`] = el;
  return obj;
}, {});

const migrationsEntry = glob.sync('./src/db/migrations/**.ts').reduce(function (obj, el) {
  obj[`migrations/${path.parse(el).name}`] = el;
  return obj;
}, {});

const seedersEntry = glob.sync('./src/db/seeders/**.ts').reduce(function (obj, el) {
  obj[`seeders/${path.parse(el).name}`] = el;
  return obj;
}, {});

const entry = {
  "config/index": './src/db/config/index.ts',
  ...modelsEntry,
  ...migrationsEntry,
  ...seedersEntry
};

module.exports = {
  mode: isProduction ? 'production' : 'development',
  // devtool: '(none)',
  // entry: {
  //   'migrations': { import: './src/db/migrations/20211009004938-create-user.ts', filename: 'migrations/[name].js' }
  // },
  entry,
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    // sourceMapFilename: 'index.js.map',
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
