"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    discribe() {
        console.log("department" + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
accounting.addEmployee(("max"));
accounting.addEmployee(("manu"));
accounting.discribe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map