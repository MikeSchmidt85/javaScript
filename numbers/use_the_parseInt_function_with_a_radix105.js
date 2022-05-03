// Use the parseInt Function with a Radix

// This is converting a binary number to an integer

function convertToIngeter(str) {

    return parseInt(str, 2); // You need to 2 there so it knows to convert it to an integer

}

console.log(convertToIngeter("1011")); // This will print out 11
console.log(convertToIngeter("101010")); // This will print out 42