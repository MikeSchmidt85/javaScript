// Practice Comparing Differnent Values

// SETUP

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal"
}

// Change this value to test

console.log(compareEquality(10, "10")); // This will be not equal
console.log(compareEquality(10, 10)); // This will be equal
console.log(compareEquality("10", "10")); // This will be equal