// Returning Early Patterns from Functions 

// SETUP

function abTest(a, b) {
    // Only change code below this line 

    if (a < 0 || b < 0) {
        return undefined;
    }


    // Only change code above this line

    // Math.round - rounds to the nearest integer
    // Math.pow - returns the base exponent
    // Math.sqrt - returns the square root of the number
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}

// Change values below to test your code

console.log(abTest(-2, 2)); // This will print undefined
console.log(abTest(2, 2)); // This will print 8