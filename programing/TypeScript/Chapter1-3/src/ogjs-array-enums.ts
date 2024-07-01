// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // Tupleの書き方
//     role: [number, string];
// } = {
//     name : "hiroki",
//     age : 25,
//     hobbies : ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHER = 2;

// 自動的に0から数字が割り当てられる
// 数字を設定可能（その後の数字は＋1されていく）
// 各々の数字を指定可能
// 文字列の指定可能
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHER = 200,
}

const person = {
  name: "hiroki",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

// stringの配列
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}

if (person.role == Role.ADMIN) {
  console.log("管理者ユーザー");
}
