"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    discribe() {
        console.log(`department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("d1", "Accounting");
accounting.addEmployee("max");
accounting.addEmployee("manu");
accounting.discribe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map