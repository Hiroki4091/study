// ジェネリック型：他の特定の型と結合された型
// const names: Array<string> = []; // string[]と書くのと変わらない

// // 型の返す値を指定できる<string> typescriptのサポートを得ることができる
// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("終わりました!");
//   }, 2000);
// });

// // promiseがstringを返すことを指定しているのでsplitメソッドが使用できる
// promise.then(data => {
//     data.split(' ');
// })

// 異なるオブジェクト型を返すことを指定
// 型に制約をつけることができる T, Uはextendsの型でなければならない
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return <T & U>Object.assign({}, objA, objB);
}

// TとUのオブジェクトを指定することができるが型推論してくれるので明示的に書かなくていい
const mergedObj = merge({ name: "max" , hobbies: ['sports']}, { age: 30 });
console.log(mergedObj);

interface Lengthy {
    length: number;
}

// elementの引数に曖昧さ（柔軟に）を残している
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = '値がありません';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です。';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'baseball']));

// Uは1つ目のプロパティTの中に存在しなければならないのでUに制約をつける
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];

}

console.log(extractAndConvert({name : 'max'}, 'name'));