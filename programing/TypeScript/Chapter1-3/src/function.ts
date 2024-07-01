function add(n1: number, n2: number) {
  return n1 + n2;
}

// 戻り値を指定することができる
function printResult(num: number): void {
  console.log("Result: " + num);
}

// 関数であることを指定する let combineValues: Function;

// どのような引数を受け取り何を返すかを指定することができる
let combineValues: (a: number, b: number) => number;

// コールバック関数
function addAndHandle(n1: number, n2: number, cb:(num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

printResult(add(5, 12));
