class Department {
  name: string;
  private employees: string[] = []; 

  constructor(n: string) {
    this.name = n;
  }

  discribe(this: Department) {
    console.log("department" + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Departmentクラスのインスタンス
const accounting = new Department("Accounting");

accounting.addEmployee(("max"));
accounting.addEmployee(("manu"));
accounting.discribe();
accounting.printEmployeeInformation();

// const accountingCopy = {
//   name: "Dummy",
//   discribe: accounting.discribe
// };

// accountingCopy.discribe();
