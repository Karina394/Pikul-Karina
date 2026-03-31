let users = [
    { name: "Аня", age: 17 },
    { name: "Іван", age: 20 },
    { name: "Оля", age: 25 },
    { name: "Дмитро", age: 16 }
];
let adults = users.filter(user => user.age > 18);
let names = users.map(user => user.name);
let sumAge = 0;
for (let i = 0; i < users.length; i++) {
    sumAge += users[i].age;
}
let averageAge = sumAge / users.length;
console.log("Всі користувачі:", users);
console.log("18+:", adults);
console.log("Імена:", names);
console.log("Середній вік:", averageAge);