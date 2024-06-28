
// union型 : 複数の型指定ができる
function combine(input1: number | string, input2: number | string) {
    let result;
    // typeof: 型を確認できる  input1とinput2がnumber型なら計算
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 21);
console.log(combineAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);