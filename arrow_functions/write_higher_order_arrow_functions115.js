// Write Higher Order Arrow Functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

/*
const squareList = (arr) => {
    const squaredIntegers = arr;
    return squaredIntegers;

};
*/

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    // So what this is doing is its only looking for whole numbers and positive numbers, then squaring those numbers that are left
    return squaredIntegers;

};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers) // this is printing out an array [16, 1764, 36]

