class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  discribe(this: Department) {
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
