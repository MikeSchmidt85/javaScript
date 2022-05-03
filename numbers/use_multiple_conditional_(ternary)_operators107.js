// Use Multiple Conditional (Ternary) Operators 

function checkSign(num) {

    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

// It checks each ternary in order to see wether its positive, negative or zero

console.log(checkSign(10)); // This will return positive
console.log(checkSign(-10)); // This will return negative
console.log(checkSign(0)); // This will return zero