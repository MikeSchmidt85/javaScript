//  Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"; // This checks only numbers 1-3 to print Low
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid" // This checks only numbers 4-6 to print Mid
            break;
        case 7:
        case 8:
        case 9:
            answer = "High" // This checks only numbers 7-9 to print High
            break;
    }
    return answer;
}

// Change this value to test
console.log(sequentialSizes(1)) // This will print out Low
console.log(sequentialSizes(5)) // This will print out Mid
console.log(sequentialSizes(9)) // This will print out High