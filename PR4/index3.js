const input = document.createElement("input");
const startBtn = document.createElement("button");
const pauseBtn = document.createElement("button");
const addBtn = document.createElement("button");
const minusBtn = document.createElement("button");
const display = document.createElement("h2");
input.type = "number";
input.placeholder = "Секунди";
startBtn.textContent = "Старт";
pauseBtn.textContent = "Пауза";
addBtn.textContent = "+10 сек";
minusBtn.textContent = "-10 сек";
display.textContent = "0";
document.body.append(input, startBtn, pauseBtn, addBtn, minusBtn, display);
let time = 0;
let timer = null;
function update() {
    display.textContent = time;
}
startBtn.addEventListener("click", function () {
    const value = parseInt(input.value);
    if (isNaN(value) || value <= 0) {
        alert("Введи правильний час!");
        return;
    }
    time = value;
    update();
    clearInterval(timer);
    timer = setInterval(function () {
        time--;
        update();
        if (time <= 0) {
            clearInterval(timer);
            alert("Час вийшов!");
        }
    }, 1000);
});
pauseBtn.addEventListener("click", function () {
    clearInterval(timer);
});
addBtn.addEventListener("click", function () {
    time += 10;
    update();
});
minusBtn.addEventListener("click", function () {
    time -= 10;
    if (time < 0) time = 0;
    update();
});