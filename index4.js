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