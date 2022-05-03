// Use Destructuring Assignment with the Rest Operator

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirtTwo(list) {

    const [ , , ...arr] = list; // This will remove the first two variables from the array

    return arr;

}

const arr = removeFirtTwo(source);
console.log(arr); // This will print our the array minus the first two numbers 3-10
console.log(source); // This will print out the original array 1-10