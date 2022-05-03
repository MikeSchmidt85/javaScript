// Comparison with the Strict Equality Operator 

// SETUP

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(testStrict(10)); // This will console log Not Equal
console.log(testStrict(7)); // This will console log Equal
console.log(testStrict("7")); // This will console log Not Equal

/*
3 === 3 // This will be true
3 === "3" // This will be false

3 == 3 // This will be true
3 == "3" // This will be true
*/
