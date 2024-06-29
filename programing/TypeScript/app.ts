let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// 型を指定すれば代入できる
if (typeof userInput === 'string') {
    userName = userInput;
}