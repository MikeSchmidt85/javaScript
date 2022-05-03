//  Stand in Line

function nextInLine(arr, item) {
    // Your code here
    arr.push(item); // push() adds the item which is 6 to the end of the array
    return arr.shift(); // shift() removes the first index in the array which is the 1
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr)); // This line prints out the original array which is [1, 2, 3, 4, 5]
console.log(nextInLine(testArr, 6)); // This adds 6 to the end of the array
console.log("After: " + JSON.stringify(testArr)); // This line prints out the new array which is [2,3,4,5,6]