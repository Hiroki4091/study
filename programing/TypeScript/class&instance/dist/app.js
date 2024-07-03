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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'first') {
            return;
        }
        this.employees.push(name);
    }
}
const it = new ITDepartment("d1", ["ito"]);
const accounting = new AccountingDepartment("d2", []);
it.addEmployee("max");
it.addEmployee("manu");
it.discribe();
it.printEmployeeInformation();
accounting.addEmployee("first");
accounting.addReport("second");
accounting.printReports();
accounting.addEmployee('first');
accounting.addEmployee('second');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map