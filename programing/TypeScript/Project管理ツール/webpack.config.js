const path = require("path");

module.exports = {
  // 開発時わかりやすいエラーメッセージが出る(開発時は設定したほうがいい)
  mode: "development",
  // ファイルを取得する
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    // 絶対パスを取得できる
    path: path.resolve(__dirname, "dist"),
    // webpack devserverを使用するときに必要(相対パスで参照パスを指定)
    publicPath: "/dist",
  },
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, "dist"),
        publicPath: "dist",
      },
      {
        directory: __dirname,
        publicPath: "/",
      }
    ],
  },
  devtool: "eval",
  module: {
    rules: [
      {
        // .tsの拡張子がついたファイルはts-loaderを使用して処理するようにする
        // /\.ts$/ : 正規表現
        test: /\.ts$/,
        use: "ts-loader",
        // 除外設定
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // import文から[]内の拡張子がついたファイルを探す(import { projectState } from "../state/project-state")
    extensions: [".ts", ".js"],
  },
};
