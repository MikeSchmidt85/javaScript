function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // Object.freeze wont allow the variable to be reassigned to a differnent value

    try {
        MATH_CONSTANTS.PI = 99;
    } catch ( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI); // This will print out an errir saying it cant be changed and will still print out the prvious value which is 3.14