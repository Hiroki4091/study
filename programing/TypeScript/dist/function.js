"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
let combineValues;
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
combineValues = add;
console.log(combineValues(8, 8));
printResult(add(5, 12));
//# sourceMappingURL=function.js.map