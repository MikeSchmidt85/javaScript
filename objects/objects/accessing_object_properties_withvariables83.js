// Accessing Object Properties with Variables 

// SETUP
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

var playerNumber;      // Change this line
var playerNumber = 16; // This set the playerNmuber to 16 

var player = testObj;  // Change this line
var player = testObj[playerNumber]; // This sets the playerNumber to Montana

console.log(player); // This sets the player varible to their number, in this case play is set to number 16 which is Montana's number