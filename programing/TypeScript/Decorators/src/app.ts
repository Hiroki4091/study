function Logger(logString: string) {
  console.log("LOGGER ファクトリ");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplete(template: string, hookId: string) {
  console.log("TEMPLATE ファクトリ");
  // new : これはオブジェクトだが、new関数を使ってインスタンスを作れるもの（コンストラクタ関数）
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // originalConstructorを継承している
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("テンプレートを表示");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// デコレータはクラスが定義されたときに実行される
// デコレータファクトリを使用することで、デコレータの内部で行うことをカスタマイズすることができる
// 1つのクラスに複数のデコレータを設定できる
// デコレータが実行される順番は下から上に向かって実行される(デコレータ関数が実行される順序)
// デコレータファクトリは順番に実行される
@Logger("ログ出力中 - Person")
@WithTemplete("<h1>Personオブジェクト</h1>", "app")
class Person {
  name = "John";

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property デコレータ");
  console.log(target, propertyName);
}

// アクセサのパラメータ
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor デコレータ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// メソッドのパラメータ
// メソッドデコレータで値を返す
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method デコレータ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// パラメータのデコレータ
function Log4(target: any, name: string | Symbol, positon: number) {
  console.log("Parameter デコレータ");
  console.log(target);
  console.log(name);
  console.log(positon);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("不正な価格です。0以下は設定できません");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // オブジェクトが元々存在するオブジェクトを参照するようにする
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

const p1 = new Product("Book1", 100);
const p2 = new Product("Book2", 200);

class Printer {
  message = "クリックしました！";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

// ボタンの要素を取得
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[]; // ['requires', 'positive']
  };
}

// 実行された時に初めて値が登録される
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [
      ...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [
      ...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const property in objValidatorConfig) {
    for (const validator of objValidatorConfig[property]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[property];
          break;
        case "positive":
          isValid = isValid && obj[property] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (evnet) => {
  event?.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("正しく入力してください！");
    return;
  }
  console.log(createdCourse);
});
