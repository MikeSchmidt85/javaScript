// Chaining If Else Statements

// Each line is checked and deppending on where the number falls it print out one of the following (Tiny, Small, Medium, Large, Huge)

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(testSize(2)); // This will print out Tiny
console.log(testSize(7)); // This will print out Small
console.log(testSize(11)); // This will print out Medium
console.log(testSize(19)); // This will print out Large
console.log(testSize(21)); // This will print out Huge

/*
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num < 25 - return "Huge"

*/