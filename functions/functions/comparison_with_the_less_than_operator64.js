// Comparison with the Less Than Operator

function testLessThan(val) {
    if (val < 25) { // Change this line
    return "Under 25";
    }
    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
console.log(testLessThan(10)); // This will print out Under 25
console.log(testLessThan(26)); // This will print out Under 55
console.log(testLessThan(62)); // This will print out 55 or Over