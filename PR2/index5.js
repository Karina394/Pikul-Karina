let secret = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = prompt("Вгадай число від 1 до 100:");

    if (guess < secret) {
        alert("Загадане число більше");
    } else if (guess > secret) {
        alert("Загадане число менше");
    }

} while (guess != secret);

alert("Вітаємо! Ви вгадали число!");