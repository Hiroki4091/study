// reflect-metadataはパッケージを最初に実行されるスクリプトでimportする
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Product } from "./product.model";

const prodects = [
  { title: "商品1", price: 100 },
  { title: "商品2", price: 200 },
];

const newProd = new Product("", -100);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("バリデーションエラー!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("商品", 100);

// const loadedProdusts = prodects.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

// 上のコードをこのコードに書き換えることができる
// productsの配列をループしてオブジェクトをクラスのインスタンスに変換する
const loadedProdusts = plainToInstance(Product, prodects);

for (const prod of loadedProdusts) {
  console.log(prod.getInformation());
}
