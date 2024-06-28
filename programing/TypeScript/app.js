function combine(input1, input2) {
    var result;
    // typeof: 型を確認できる  input1とinput2がnumber型なら計算
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 21);
console.log(combineAges);
var combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
