// Comparison with the Less Than or Equal to Operator

function testLessOrEqual(val) {
    if (val <= 12) { //Change this line
        return "Smaller Than or Equal to 12";
    }
    if(val <= 24) { //Change this line
        return "Smaller Than of Equal to 24";
    }
    return "More Than 24";
}

// Change this value to test

console.log(testLessOrEqual(10)); // This will print out Smaller Than or Equal to 12
console.log(testLessOrEqual(22)); // This will print out Smaller Than or Equal to 24
console.log(testLessOrEqual(25)); // This will print out More Than 24