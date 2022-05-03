// Manipulating Arrays with Unshift()

// Example

var ourArray = ["Schmidt", "D", ["Mike"]];
ourArray.shift(); // This removes the first string "Schmidt"
ourArray.unshift("Happy"); // This adds Happy to the beginning of the array

// ourArray now equal ["Happy", "D", ["Mike"]]
// unshift() = this adds an item to the beginning of the array

// SETUP
var myArray = [["John", 23], ["Pauline", 7]];
myArray.shift();

// Only change below this line

myArray.unshift(["Joey", 26]);

console.log(ourArray)
console.log(myArray)
