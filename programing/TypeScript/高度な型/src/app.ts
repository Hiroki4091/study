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

// 関数オーバーロード:関数のプロパティが何を受け取ったら何を返すのか明記できる
// 引数が両方ともstringの時stringで返す
function add(a: string, b: string): string;
// 引数が両方ともnumberの時numberで返す
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  // このif文がtypeガード（複数の型に応じて処理を切り替える）
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, "hello");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "user1",
  job: {
    title: "Developer",
    description: "TypeScript",
  },
};

// fetchedUserData.jobがundifinedだったら後ろの式fetchedUserData.job.titleは実行されない
// console.log(fetchedUserData.job && fetchedUserData.job.title);
// ?がundifinedの場合、その後ろはアクセスしない(実行時エラーが起きない)
console.log(fetchedUserData?.job?.title);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date; " + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("運転中...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("運転中...");
//   }
//   loadCargo(amount: number) {
//     console.log("荷物を載せています..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   // 共通のプロパティが必要
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("移動速度: " + speed);
// }

// moveAnimal({ type: "horse", runningSpeed: 10 });

// // 2つの方法がある（プロジェクトと通して同じ方法を使う）
// // 型キャスト<>の中に型をいれる
// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// // asの後ろに型を入れる
// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "コメント";
// }

// interface ErrorContainer {
//   // { email : '正しいメールアドレスではありません', username: 'ユーザー名に記号を含めることはできません' }
//   // indexがあると他の型のプロパティを格納できない
//   [key: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "正しいメールアドレスではありません",
//   username: "ユーザー名に記号を含めることはできません",
// };
