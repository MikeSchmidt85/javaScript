// Else Statements

function testElse(val) {
    var result = "";
    //Only change code below this line

    if(val > 5) {
        result = "Bigger than 5";
    }
    else 
    result = "5 or Smaller"

    // if (val <= 5) {  // These three lines get replaced with the else statement on lines 10 and 11
    //     result = "5 or Smaller"
    // }

    // Only change code above this line
    return result;
}

console.log(testElse(25)) // This prints out Bigger than 5
console.log(testElse(3)) // This prints out 5 or Smaller
console.log(testElse(5)) // This prints our 5 or Smaller

