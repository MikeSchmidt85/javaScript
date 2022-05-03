// Esle If Statements

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if(val < 5){
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }

//     if (val < 5) {   // These lines are being replaced with an else if statement on lines 7- 12
//         return "Smaller than 5";
//     }

//     return "Between 5 and 10"
}

// Chage this value to test
console.log(testElseIf(4)); // This will print out Smaller than 5
console.log(testElseIf(7)); // This will print out Bewteen 8 and 10
console.log(testElseIf(12)); // This will print out Greater than 10