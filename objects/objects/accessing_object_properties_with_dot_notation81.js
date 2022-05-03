// Accessing Object Properties with Dot Notation 

// SETUP

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;  // Change this line ↓↓↓
var hatValue = testObj.hat // This changes hatValue to ballcap

var shirtValue = testObj;  // Change this line ↓↓↓
var shirtValue = testObj.shirt; // This changes shirtValue to jersey

console.log(hatValue);  // This will print out ballcap as we set the new vaule of hatValue to ballcap
console.log(shirtValue);  // This will print out jersey as we set the new vaule of shirtVaule to jersey