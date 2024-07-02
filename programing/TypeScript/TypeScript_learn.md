# TypeScript

## TypeScriptをインストール

```bash
npm install typescript
```

## TypeScriptをコンパイル

```bash
tsc ファイル名
```

## TypeScriptコンパイラを自動生成する
```bash
npx tsc --init
```

## lite-serverのパッケージをインストール
```bash
npm install lite-server --save-dev
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

- number, string, boolean, object, Array, Tuple, Enum, Any, Union, Literal
    - 型推論の機能があるため、型を明記しなくてもいい
- object型：key → type(型)
- Tuple ：長さが固定の配列
- Enum：列挙型
- Any：どんな値でもいい。型を指定しない
    - 必要でない限り使わない方がいい
- Union：複数の型を指定できる
- Literal：型の値を指定して使用できる
- エイリアス：自分自身の型を定義する時に使用する
    - 複雑になりやすい Object 型に対しても型エイリアスを使うことができます。

例:
```typescript
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```
型エイリアスにより、不必要なコードを繰り返し記述することを避けることができる。また、型の定義を一箇所で管理することができる。

例）型エイリアスを使っていないコード：
```typescript
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```
例）型エイリアスを使ったコード:
```typescript
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

#### コールバック関数
他の関数に引数として渡され、後で実行される関数
コールバック関数は、非同期処理や関数の振る舞いを制御するために広く使用されている

#### 主な特徴と使用方法
1. 定義と使用:他の関数の引数として渡される
```typescript
function add(a: number, b: number, callback: (result: number) => void): void {
  const result = a + b;
  callback(result);
}

add(1, 2, (result) => {
  console.log(result); // 3
});
```
add関数が計算結果をコールバック関数に渡している

## 役に立つ資料
- [TypeScript：公式ドキュメント](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
[TypeScriptの型システム](https://typescript-jp.gitbook.io/deep-dive/type-system)

## プロジェクトをコンパイル
```bash
tsc --init
```
- 上記コマンドを打つことでこのディレクトリがtypescriptのプロジェクトであると伝えることができる
- tsconfig.json
  - typescriptによって管理されるべきもの

## コンパイルの設定
### 参考資料
- [コンパイル設定ファイルについて](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [TypeScript:公式ドキュメント](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## データ構造
- [JavaScriptのデータ構造](https://developer.mozilla.org/ja/docs/Web/JavaScript/Data_structures)
- [プリミティブ型について](https://developer.mozilla.org/ja/docs/Glossary/Primitive)

## モダンなJavaScriptの機能
- [機能について](https://typescript-jp.gitbook.io/deep-dive/future-javascript)