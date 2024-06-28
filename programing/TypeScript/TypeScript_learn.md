# TypeScript

## TypeScriptをインストール

```bash
npm install typescript
```

## TypeScriptをコンパイル

```bash
tsc ファイル名
```

## 特長

- Javascriptを簡単にコードを書けるようになったもの
- エラーが事前に見つけやすい
- TypeScriptのコードをJavaScriptにコンパイラしている
- TypeScriptはブラウザでは使用できない

## メリット

- 型（type）
- 新しい世代のJavaScriptの機能が使える
    - 古いブラウザでも動作するようにコンパイラする
- インターフェースやジェネリクス等が追加されている
- メタプログラミングの機能
- 豊富なオプション（高いカスタマイズ性）
- TypeScriptではないプロジェクトでも役立つモダンなツール

## 型

- number, string, boolean, object, Array, Tuple, Enum, Any, union
    - 型推論の機能があるため、型を明記しなくてもいい
- object型：key → type(型)
- Tuple ：長さが固定の配列
- Enum：列挙型
- Any：どんな値でもいい。型を指定しない
    - 必要でない限り使わない方がいい
- union：複数の型を指定できる