// Comparison with the Inequality Operator

// SETUP

function testNotEqual(val) {
    if (val != 99) { //Change this line
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
console.log(testNotEqual(10)); // This will console log Not Equal
console.log(testNotEqual(99)); // This will console log Equal
console.log(testNotEqual("99")); // This will console log Equal