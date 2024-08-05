const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  // 本番時には設定しておきたい
  mode: "production",
  // ファイルを取得する
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    // 絶対パスを取得できる
    path: path.resolve(__dirname, "dist"),
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
      },
    ],
  },
  // source-mapを出力しないように設定
  devtool: false,
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
  // ワークフロー全体に適用される(全てのアウトプット、プロジェクト全体に適用されるもの)
  plugins: [
    // distフォルダの中身をクリアにするためのプラグイン(distフォルダが常に最新のアウトプットファイル(最後に出力されたファイル)だけが配置されることになる)
    // ファイルを出力する前にdistフォルダの中身を削除するようになる
    new CleanPlugin.CleanWebpackPlugin(),
  ],
};
