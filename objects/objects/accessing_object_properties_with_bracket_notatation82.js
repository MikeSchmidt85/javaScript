// Accessing Object Properties with Bracket Notation 

// SETUP

var testObj = {
    "an entree": "Cheeseburger",
    "my side": "French fries",
    "the drink": "Coke"
};

// Only change code below this line

var entreeValue = testObj; // Change this line ↓↓↓
var entreeValue = testObj["an entree"]; // This changes entreeValue to equal "an entree" which is equal to Cheeseburger
var drinkValue = testObj; // Change this line ↓↓↓ 
var drinkValue = testObj["the drink"]; // This changes drinkValue to equal "the drink" which is equal to Coke

console.log(entreeValue); // This will print out Cheeseburger
console.log(drinkValue); // This will print out Coke