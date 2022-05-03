// Generate Random Whole Numbers with a Range 

// Example

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;

}


var ourRange = ourRandomRange(1, 9);

console.log(ourRange);  // This will print a random number between the two numbers we give it from line 12

// Only change code below this line

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

var myRandom = randomRange(5, 15);

console.log(myRandom); // This will print a random number between the two numbers we give it from line 24