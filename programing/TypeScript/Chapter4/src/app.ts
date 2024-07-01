// const 値変更不可
const userName = "max";

// 値変更可能
let age = 30;

// アロー関数(関数を短く書くことができる)
// 処理するコードが1つの場合中括弧は省略できる,returnも省略できる
// const add = function(a: number, b: number) {
//     return a + b;
// }

// デフォルト値：引数の後ろにイコールで値を設定（右の引数しか設定できない or 全てに設定）
const add = (a: number, b: number = 1) => a + b;

// 引数が1つの場合は引数の括弧は省略できる
// const printOutput = (output: string | number) => console.log(output);
const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

printOutput(add(2));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}
