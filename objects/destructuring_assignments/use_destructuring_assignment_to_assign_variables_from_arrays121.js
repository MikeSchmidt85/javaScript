//  Use Destructuring Assignment to Assign Variables from Arrays

const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // We skipped the 2 index to print index's 0, 1, 3
console.log(z, x, y) // This will print out 1, 2, 4

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a] // We;re swapping the values a and b to be opposite
})();
console.log(a); // This will print out 6
console.log(b); // this will print out 8