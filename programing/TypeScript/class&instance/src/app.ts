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

// Departmentを継承
class ITDepartment extends Department {
    constructor(id: string, private admins: string[]) {
        // 親クラスのコンストラクタを呼び出す
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

// Departmentクラスのインスタンス
const it = new ITDepartment("d1", ["ito"]);
const accounting = new AccountingDepartment("d2", [])

it.addEmployee("max");
it.addEmployee("manu");
it.discribe();
it.printEmployeeInformation();
accounting.addEmployee("first");
accounting.addReport("second");
accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = {
//   name: "Dummy",
//   discribe: accounting.discribe
// };

// accountingCopy.discribe();
