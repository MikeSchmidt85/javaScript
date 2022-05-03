// Use the Rest Operator with Function Parameters

const sum1 = (function() {
    return function sum(x, y, z) {      // You can only add in 3 numbers, as there is only 3 variables (x, y, z)
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();

// This specific function is lookijng for just those three args

console.log(sum1(1, 2, 3)); // This will print out 6

const sum2 = (function() {
    return function sum(...args) {          //...args means you can add in any amount of arguments or numbers
        return args.reduce((a, b) => a + b, 0);
    };
})();

// This specific function is looking in the args parentheses and you can add many other numbers, its not specific to a certain amount

console.log(sum2(1, 2, 3, 4, 5)); // This will print out 15