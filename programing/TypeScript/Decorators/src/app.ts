function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// デコレータはクラスが定義されたときに実行される
// デコレータファクトリを使用することで、デコレータの内部で行うことをカスタマイズすることができる
@Logger("ログ出力中 - Person")
class Person {
  name = "John";

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();

console.log(pers);
