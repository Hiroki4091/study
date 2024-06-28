var person = {
    name: "hiroki",
    age: 25,
    hobbies: ['Sports', 'Cooking']
};
// stringの配列
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
