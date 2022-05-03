// Understanding Undefined Value Returned from a Function 

// Functions can have return statements, but they dont have to

// Example

var sum = 0;

function addThree() {
    sum = sum + 3;
}

// Unless you put a return value in the function it wont return anything, itll be just undefined

function addFive() {
    sum = sum + 5;

}

// Both these answers are undefined or simply it wont print anything