let products = [
    { name: "Хліб", category: "Їжа" },
    { name: "Молоко", category: "Їжа" },
    { name: "Ноутбук", category: "Електроніка" },
    { name: "Телефон", category: "Електроніка" }
];
let grouped = {};
for (let i = 0; i < products.length; i++) {
    let item = products[i];
    if (!grouped[item.category]) {
        grouped[item.category] = [];
    }
    grouped[item.category].push(item.name);
}
console.log("Групи товарів:", grouped);