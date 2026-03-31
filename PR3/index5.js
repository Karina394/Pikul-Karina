const names = ['Анна', 'Олександр', 'Марія', 'Дмитро', 'Софія'];
const nameLengthObj = {};
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    nameLengthObj[name] = name.length;
}
console.log(nameLengthObj);