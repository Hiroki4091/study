class Department {
  //   private readonly id: string;
  //   name: string;
  private employees: string[] = [];

  // プロパティの宣言と初期化を一度に行うことができる
  // readonly: 読み取り専用
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  discribe(this: Department) {
    console.log(`department (${this.id}): ${this.name}`);
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
const accounting = new Department("d1", "Accounting");

accounting.addEmployee("max");
accounting.addEmployee("manu");
accounting.discribe();
accounting.printEmployeeInformation();

// const accountingCopy = {
//   name: "Dummy",
//   discribe: accounting.discribe
// };

// accountingCopy.discribe();
