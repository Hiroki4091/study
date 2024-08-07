// reflect-metadataはパッケージを最初に実行されるスクリプトでimportする
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { Product } from "./product.model";

const prodects = [
  { title: "商品1", price: 100 },
  { title: "商品2", price: 200 },
];

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
