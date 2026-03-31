let students = {
    "Аня": [10, 11, 12],
    "Іван": [8, 9, 10],
    "Оля": [12, 12, 11]
};
for (let name in students) {
    let grades = students[name];
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    let avg = sum / grades.length;
    console.log(name + " - середній бал: " + avg);
}