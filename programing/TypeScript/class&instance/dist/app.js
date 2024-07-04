"use strict";
let add;
add = (a, b) => {
    return a + b;
};
class Person {
    constructor(n) {
        this.age = 0;
        this.name = n;
    }
    greet(pharase) {
        console.log(pharase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('max');
user1.greet('Hello I am');
console.log(user1);
//# sourceMappingURL=app.js.map