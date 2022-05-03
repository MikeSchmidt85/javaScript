// comparison with the Logical and Operator

function testGreaterThan(val) {
    if (val > 100) { // Change this
        return "Over 100";
    }
    if(val > 10) { // Change this line
        return "Over 10";
    }
    
    return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(10)); // This will print out 10 or Under
console.log(testGreaterThan(1010)); // This will print out Over 100
console.log(testGreaterThan(100)); // This will print out Over 10