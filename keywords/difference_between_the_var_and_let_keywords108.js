// Difference Between the Var and Let Keywords

// Other ways you can start variables(var) is with either "let" or "const"

/*
var dogName = "Cookie";
var quote;

var dogName = "Lollipop";

function dogTalk() {
    "use strict";
    
    dogName = "Roxie";
    quote = dogName + "says Bark!";
    
}

dogTalk();
*/

//------------------------------------------------------

// "let" does not let you declare a variable twice

let dogName = "Cookie";
let quote;

// let dogName = "Lollipop"; // If we remove the let here we wont get the error

dogName = "Lollipop"

function dogTalk() {
    "use strict"; // This catches common coding mistakes and unsaved actions

    dogName = "Roxie";
    quote = dogName + " says Bark!";

    return quote

}

console.log(dogTalk()); // This prints Roxie says Bark!