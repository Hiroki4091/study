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

// ジェネリッククラス
// object型が使えないようにする
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        } 
        // 値が見つからない場合は-1(配列の最後の要素)
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('data1');
textStorage.addItem('data2');
textStorage.removeItem('data1');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const obj = {name: 'max'};
// objStorage.addItem(obj);
// objStorage.removeItem(obj);
// console.log(objStorage.getItems());

interface CourceGorl {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourceGorl(title: string, description: string, date: Date) : CourceGorl {
    // Partial: 既存の型の全てのプロパティをオプショナル（任意）にする便利なユーティリティ型
    let courceGorl: Partial<CourceGorl> = {};
    courceGorl.title = title;
    courceGorl.description = description;
    courceGorl.completeUntil = date;
    return courceGorl as CourceGorl;
}

const names : Readonly<string[]> = ['Max', 'Anna'];
// readonly型: 読み取り専用なので値を追加、変更ができない
// names.push('Manu');
// names.pop();