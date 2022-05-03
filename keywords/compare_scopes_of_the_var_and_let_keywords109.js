// Compare Scopes of the var and let Keywords

function checkScope() {
    "use strict";
        // var i = "function scope"; // Change the var in this line to let and the console.logs will both work
        let i = "function scope"; 
        if (true) {
             let i = "block scope"; // You alao have to add let here for this to work
            console.log("Block scope i is: ", i);
        }
        console.log("Function scope i is: ", i);
        return i;
}

checkScope();

//"var" can be used throughout the entire code where as "let" can only be used in a certain block of code