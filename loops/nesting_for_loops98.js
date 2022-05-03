// Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++)
        product *= arr[i][j];
    }

    return product
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product); // this will print out the total number of all the numbers multiplied together which is 5040