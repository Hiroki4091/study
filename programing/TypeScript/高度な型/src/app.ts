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