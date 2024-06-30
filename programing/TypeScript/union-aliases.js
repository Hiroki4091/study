"use strict";
// union型 : 複数の型指定ができる
function combine(input1, input2, 
// どんな値を入れるか決めることができる
resultConversion) {
    let result;
    // typeof: 型を確認できる  input1とinput2がnumber型なら計算
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if (resultConversion === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
const combineAges = combine(30, 21, "as-number");
console.log(combineAges);
// 引数は文字列だが、結果は数値で返したい
const combineStringAges = combine("30", "21", "as-number");
console.log(combineStringAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
