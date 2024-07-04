// type AddFn = (a: number, b: number) => number;
interface AddFn {
    // 匿名メソッド
    (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
    return a + b;
}

// 初期値を設定することはできない
// 型として使用できる
interface Named {
    // readonlyを利用できる
    readonly name?: string;
    // オプショナルなプロパティ
    outputName?: string;
}

// Namedを継承している
interface Greetable extends Named {
    greet(pharase: string): void;
}

// インターフェイスを実装
class Person implements Greetable {
    name?: string;
    age: number = 0;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(pharase: string) {
        if (this.name) {
            console.log(pharase + ' ' + this.name);
        } else {
            console.log("Hi!");
        }
    }
}

// インターフェースを型として指定できる
let user1: Greetable;

// nameが任意のパラメータなので引数がなくてもいい
user1 = new Person();

user1.greet('Hello I am')

console.log(user1);