let number = 10;
let floatNumber = 3.14;
let text = "Hello";
let isTrue = true;
console.log(typeof number);
console.log(typeof floatNumber);
console.log(typeof text);
console.log(typeof isTrue);
number = "5";
floatNumber = "2.71";
text = "World";
isTrue = false;
console.log(typeof number);
let result = number + text;
console.log("Конкатенація:", result);
let lol = Number(isTrue);
console.log(String(floatNumber));
console.log("true -> число:", lol);
let person = {
    name: "Anna",
    age: 18,
    student: true,
    height: 1.65
};
console.log("Об'єкт JSON:", JSON.stringify(person));

let a = 12;
let b = 7;
let c = 5;
let average = (a + b + c) / 3;
console.log("Середнє:", average);
console.log("Модуль числа:", Math.abs(-12));
console.log("Округлення вверх:", Math.ceil(7.2));
console.log("Округлення вниз:", Math.floor(7.8));
console.log("Степінь:", Math.pow(a, 2));
if (a % 5 === 0) {
    console.log("12 ділиться на 5");
} else {
    console.log("12 не ділиться на 5");
}
if (a + b > c && a + c > b && b + c > a) {
    console.log("Трикутник може існувати");
} else {
    console.log("Трикутник не може існувати");
}

let x = 8;
let y = 3;
let z = 15;
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log("Найбільше:", max);
console.log("Найменше:", min);
if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
    console.log("Хоча б одне число парне");
} else {
    console.log("Парних чисел немає");
}
let condition = (x > y && y < z);
console.log("Результат умови:", condition);
let num = 7;
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
    }
}
if (isPrime) {
    console.log("Число просте");
} else {
    console.log("Число не просте");
}

let userName = "Карина";
let birthYear = 2009;
let city = "Луцьк";
let currentYear = 2026;
let age = currentYear - birthYear;
console.log("Ім'я:", userName);
console.log("Вік:", age);
if (age < 12) {
    console.log("Дитина");
} else if (age < 18) {
    console.log("Підліток");
} else if (age < 60) {
    console.log("Дорослий");
} else {
    console.log("Літня людина");
}
let capital = "Київ";
if (city === capital) {
    console.log("Ви живете у столиці");
} else {
    console.log("Ви живете не у столиці");
}