"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    discribe() {
        console.log("department" + this.name);
    }
}
const accounting = new Department("Accounting");
accounting.discribe();
const accountingCopy = {
    name: "Dummy",
    discribe: accounting.discribe
};
accountingCopy.discribe();
//# sourceMappingURL=app.js.map