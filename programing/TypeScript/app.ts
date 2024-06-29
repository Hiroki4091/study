let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// 型を指定すれば代入できる
if (typeof userInput === "string") {
  userName = userInput;
}

// never型：戻り値を絶対に返さないと明示的に表すことができる
function genetareError(message: string, code: number): never {
  throw {
    message: message,
    error: code,
  };
}

const result = genetareError('エラーが発生しました', 500);
console.log(result);