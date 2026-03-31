let numbers = [5, 12, 3, 20, 8, 1];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / numbers.length;
let max = Math.max(...numbers);
let min = Math.min(...numbers);
let sorted = [...numbers].sort((a, b) => a - b);
console.log("Масив:", numbers);
console.log("Середнє:", average);
console.log("Максимум:", max);
console.log("Мінімум:", min);
console.log("Відсортований:", sorted);