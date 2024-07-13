function Logger(constructor: Function) {
  console.log("ログ出力中...");
  console.log(constructor);
}

// デコレータはクラスが定義されたときに実行される
@Logger
class Person {
  name = "John";

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();

console.log(pers);
