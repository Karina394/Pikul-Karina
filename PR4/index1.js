const input = document.createElement("input");
const addBtn = document.createElement("button");
const sortBtn = document.createElement("button");
const list = document.createElement("ul");
addBtn.textContent = "Додати";
sortBtn.textContent = "Сортувати";
input.placeholder = "Введи текст";
document.body.append(input, addBtn, sortBtn, list);
addBtn.addEventListener("click", function () {
    const value = input.value.trim();
    if (value === "") {
        alert("Введи текст!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = value;

    li.addEventListener("click", function () {
        li.remove();
    });
    list.appendChild(li);
    input.value = "";
});
sortBtn.addEventListener("click", function () {
    const items = Array.from(list.children);
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
});