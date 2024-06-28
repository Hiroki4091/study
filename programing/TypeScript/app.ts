const person = {
    name : "hiroki",
    age : 25,
    hobbies : ['Sports', 'Cooking']
};

// stringの配列
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
}