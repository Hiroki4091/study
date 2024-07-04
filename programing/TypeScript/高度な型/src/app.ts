type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// 交差型：2つ型を結合する（インターフェースでも使用できる）
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// CombinableとNumericで共通の型がnumberなのでUniversalはnumber型
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  // このif文がtypeガード（複数の型に応じて処理を切り替える）
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date; " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("運転中...");
  }
}

class Truck {
  drive() {
    console.log("運転中...");
  }
  loadCargo(amount: number) {
    console.log("荷物を載せています..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);