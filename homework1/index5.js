function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let number of arr) {
        if (number > max) {
            max = number;
        }
        if (number < min) {
            min = number;
        }
    }
    return {
        max: max,
        min: min
    };
}
let numbers = [5, 8, 2, 10, 3, 7];
let result = findMinMax(numbers);
console.log("Максимум:", result.max);
console.log("Мінімум:", result.min);