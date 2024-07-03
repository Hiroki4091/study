class Department {

  static fiscalYear = 2020;
  //   private readonly id: string;
  //   name: string;
  // protected 継承先でも使用できるようになる（外部からアクセスはできない）
  protected employees: string[] = [];

  // staticメソッド
  static createEmployee(name: string) {
    return { name: name};
  }

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
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません。')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('正しい値を設定してください。');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if (name === 'first') {
            return;
        }
        this.employees.push(name);
    }
}

// インスタンス化せずに直接呼ぶことができる
const employee1 = Department.createEmployee('MAX');
console.log(employee1, Department.fiscalYear);

// Departmentクラスのインスタンス
const it = new ITDepartment("d1", ["ito"]);
const accounting = new AccountingDepartment("d2", [])

it.addEmployee("max");
it.addEmployee("manu");
it.discribe();
it.printEmployeeInformation();
accounting.addEmployee("first");
accounting.addReport("second");

accounting.mostRecentReport = '会計レポート';
console.log(accounting.mostRecentReport);
accounting.printReports();

accounting.addEmployee('first');
accounting.addEmployee('second');
accounting.printEmployeeInformation();

// const accountingCopy = {
//   name: "Dummy",
//   discribe: accounting.discribe
// };

// accountingCopy.discribe();
