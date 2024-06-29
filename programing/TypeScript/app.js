function add(n1, n2) {
    return n1 + n2;
}
// 戻り値を指定することができる
function printResult(num) {
    console.log("Result: " + num);
}
// 関数であることを指定する(引数の型を定義できる)
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
printResult(add(5, 12));
