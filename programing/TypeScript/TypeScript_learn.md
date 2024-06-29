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