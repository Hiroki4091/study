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
// const add = (a: number, b: number = 1) => a + b;

// 引数が1つの場合は引数の括弧は省略できる
// const printOutput = (output: string | number) => console.log(output);
// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };

// printOutput(add(2));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// スプレット演算子の後ろに書かれた配列の要素を個別の値として展開
// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

const person = {
  name: "max",
  age: 30,
};

// オブジェクトの中身を全て追加
const copiedPerson = {
  ...person,
};

// レストパラメータ：任意の数の引数をつけとる際に便利
const add = (...numbers: number[]) => {
  // redece:全ての配列の要素に何らかの処理ができ、結果を1つにまとめる
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 6, 7, 8, 9, 10, 11, 12);
console.log(addedNumbers);
