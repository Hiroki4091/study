"use strict";
let add;
add = (a, b) => {
    return a + b;
};
class Person {
    constructor(n) {
        this.age = 0;
        if (n) {
            this.name = n;
        }
    }
    greet(pharase) {
        if (this.name) {
            console.log(pharase + ' ' + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hello I am');
console.log(user1);
//# sourceMappingURL=app.js.map