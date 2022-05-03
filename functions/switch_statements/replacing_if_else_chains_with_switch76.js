// Replacing If Else Chains with Switch


// We will be changing these else if statements to switch statements

/* function chainToSwitch(val) {
     var answer = "";
     switch (val) {}
     if (val === "Bob") {
         answer = "Marley";
     }
     else if (val === 42) {
         answer = "The Answer"
     }
     else if (val === 1) {
         answer = "There is no #1"
     }
     else if (val === 99) {
         answer = "Missed me by this much!"
     }
     else if (val === 7) {
         answer = "Ate Nine"
     }

// Only change code above this line
    
     return answer;
}
*/

function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "Bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1"
            break;
        case 99:
            answer = "Missed me by this much!"
            break;
        case 7:
            answer = "Ate Nine"
            break;

        // Only change code above this line
    }
    return answer;

}

console.log(chainToSwitch("Bob")); // This will print out Marley
console.log(chainToSwitch(42)); // This will print out The Answer
console.log(chainToSwitch(1)); // This will print out There is no #1
console.log(chainToSwitch(99)); // This will print out Missed me by this much!
console.log(chainToSwitch(7)); // This will print out Ate Nine