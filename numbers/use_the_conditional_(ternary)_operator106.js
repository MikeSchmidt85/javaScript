// Use the Conditional (Ternary) Operator

// condition ? statement-if-true : Statement-if-false;

// Convert this into a ternary statement

/*
function checkEqual(a, b) {
    if(a === b) {
        return true;
    } else {
        return false;
    }

}
*/

function checkEqual(a, b) {
    return a === b ? true : false;

    // or you coult just type:
    // return a === b;
}

console.log(checkEqual(1, 2)); // This will return false
console.log(checkEqual(1, 1)); // This will return tru