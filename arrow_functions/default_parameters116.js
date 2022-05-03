// Default Parameters

const increment = (function() {
    return function increment(number, value = 5) {
        return number + value;
    };
})();

console.log(increment(5, 2)); // This will print out 7 as the value up top is added to 2
console.log(increment(5));    // this will print our 10 as the value up top is added to 5