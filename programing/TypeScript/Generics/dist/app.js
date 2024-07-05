"use strict";
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObj = merge({ name: "max", hobbies: ['sports'] }, { age: 30 });
console.log(mergedObj.age);
//# sourceMappingURL=app.js.map