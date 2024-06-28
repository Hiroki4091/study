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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHER"] = 2] = "AUTHER";
})(Role || (Role = {}));
var person = {
    name: "hiroki",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
// stringの配列
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
if (person.role == Role.ADMIN) {
    console.log("管理者ユーザー");
}
