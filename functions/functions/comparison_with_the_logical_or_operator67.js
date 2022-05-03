// Comparison with the Logical or Operator 

function testLogical(val) {
    //Only change code below this line
    if (val < 10 || val > 20) { // The || means "or" so if its less then 10 "or" greater then 20
        return "Outside";
    }

    // if (val > 20) {       // This code is placed in the above code in line 5
    //     return "Outside";
    // }

    //Only change code above this line
    return "Inside";
}

// Change this value to test
console.log(testLogical(15)); // This prints out Inside
console.log(testLogical(5)); // This prints out Outside
console.log(testLogical(25)); // This prints out Outside