"use strict";
class Department {
    static createEmployee(name) {
        return { name: name };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    discribe() {
        console.log('IT部門 - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません。');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定してください。');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    discribe() {
        console.log('会計部門 - ID: ' + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
const employee1 = Department.createEmployee('MAX');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("d1", ["ito"]);
const accounting = new AccountingDepartment("d2", []);
it.addEmployee("max");
it.addEmployee("manu");
it.discribe();
it.printEmployeeInformation();
accounting.addEmployee("first");
accounting.addReport("second");
accounting.discribe();
accounting.mostRecentReport = '会計レポート';
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('first');
accounting.addEmployee('second');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map