let n = prompt("Введіть число:");
let result = 1;
let i = 1;

while (i <= n) {
    result = result * i;
    i++;
}

console.log("Факторіал:", result);