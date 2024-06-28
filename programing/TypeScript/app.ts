const person: {
    name: string;
    age: number;
    hobbies: string[];
    // Tupleの書き方
    role: [number, string];
} = {
    name : "hiroki",
    age : 25,
    hobbies : ['Sports', 'Cooking'],
    role: [2, 'author'],
};

// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

// stringの配列
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
}