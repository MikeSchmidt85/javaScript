// Local Scope and Functions 

function myLocalScope() {
    var myVar = 5;          // We declared this variable in this function, so it only works inside this specific function
    console.log(myVar);

}

myLocalScope();

console.log(myVar); //This wont print anything because its not defined, if the var myVar = 5 was outside of the function this would work

// Having it outside the function will run both the function and the console.log a the bottom
