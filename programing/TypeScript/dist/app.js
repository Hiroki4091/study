"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function genetareError(message, code) {
    throw {
        message: message,
        error: code,
    };
}
const result = genetareError('エラーが発生しました', 500);
console.log(result);
