// Declare a Read-only Variable with the Const Keyword

function printManytimes(str) {
    "use strict"

    // var sentence = str + " is cool!"; // If you change the "var" to "const" re cant reassign the value, youll get an error
    const SENTENCE = str + " is cool!"; // When using const you typically capitalize the entire variable name

    // sentence = str + " is amazing!"

    // for(var i = 0; i < str.length; i +=21) { // Were also gonna change var here to let
    for(let i = 0; i < str.length; i +=21) {
        console.log(SENTENCE);
    }

}

printManytimes("freeCodeCamp"); // This will print out freeCodeCamp is cool!

// If you know youre never gonna change a variable EVER, always use "const"