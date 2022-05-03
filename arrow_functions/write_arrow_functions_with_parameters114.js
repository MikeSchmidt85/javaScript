// Write Arrow Functions with Parameters

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);

};

console.log(myConcat([1, 2], [3, 4, 5])); // This will print the array as [1, 2, 3, 4, 5]

// Convert the top function to an arrow function

const myConcat = (arr1, arr2) => arr1.concat(arr2); // Dont forget to change var to const

console.log(myConcat([1, 2], [3, 4, 5])); // This will print the array as [1, 2, 3, 4, 5]

// Both function work, the bottom is an arrow function and less code and easier to read