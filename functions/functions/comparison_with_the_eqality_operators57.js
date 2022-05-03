// Comparison with the Equality Operators 

// SETUP

function testEqual(val) {
    if (val == 12) { // Change this line / double == is comparing the numbers 
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test // These are conparing the value of the 12 up top on line 6
console.log(testEqual(10)); // This will console log Not Equal
console.log(testEqual(12)); // This will console log Equal