// Comparison with the Greater Than or Equal to Operator

function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this
        return "20 or Over";
    }
    if(val >= 10) { // Change this line
        return "10 or Over";
    }
    
    return "Less Than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(10)); // This will print out 10 or Over
console.log(testGreaterOrEqual(20)); // This will print out 20 or Over
console.log(testGreaterOrEqual(5)); // This will print out Less Then 10