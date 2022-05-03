// Use Condtional Logic with If Statements 

// Example

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes it's true"; // This statement is true, so if this is true this is the only statement that will print
    }
    return "No it's false"; // This statement is false
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes that was true"; // This statement is true, so if this is true this is the only statement that will print
    }
        return "No that was false" ; // This statement is false

}

console.log(ourTrueOrFalse(false)); // This will check the first function and see that it is false and print the false statement
console.log(trueOrFalse(true)); // This will check the second function and see that it is true and print the true statement