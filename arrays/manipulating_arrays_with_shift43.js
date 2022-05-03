// Manipulating Arrays with Shift()

// Example

var ourArray = ["Schmidt", "D", ["Mike"]];
var removedFromOurArray = ourArray.shift();

// removedfromOurArray is now equalt to "Schmidt", while ourArray is now equal to ["D", ["Mike"]]
// shift() = this removes the first item from the array

// SETUP
var myArray = [["John", 23], ["Pauline", 7]];

// Only change below this line

var removedFromMyArray = myArray.shift();

console.log(ourArray)
console.log(removedFromOurArray)
console.log(myArray)
console.log(removedFromMyArray)