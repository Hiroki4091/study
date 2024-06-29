var userInput;
var userName;
userInput = 5;
userInput = "Max";
// 型を指定すれば代入できる
if (typeof userInput === "string") {
    userName = userInput;
}
function genetareError(message, code) {
    throw {
        message: message,
        error: code,
    };
}
var result = genetareError('エラーが発生しました', 500);
console.log(result);
