"use strict";
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObj = merge({ name: "max", hobbies: ['sports'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = '値がありません';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です。';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'baseball']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'max' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('data1');
textStorage.addItem('data2');
textStorage.removeItem('data1');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
//# sourceMappingURL=app.js.map