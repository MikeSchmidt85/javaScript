// Global Scope with Functions

// Scope refers to visibilty of variables
// variable which are defined outside of a function block have global scope
// Global scope means the variable can be used for all the functions
// Declare your variable here

var myGlobal = 10; // Beacuse its outside the functions it can be used fo all functions


function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5; //if you dont use "var" oopsGlobal becomes global
}

// Only change code above this line
// As long as myGlobal is defined the function will run
function fun2() {
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " +oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();