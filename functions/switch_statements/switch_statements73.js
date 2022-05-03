//  Switch Statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;              // You need to have the break here or it will skip over the previous answer
        case 2:
            answer = "beta";
            break;              // You need to have the break here or it will skip over the previous answer
        case 3:
            answer = "gamma";
            break;              // You need to have the break here or it will skip over the previous answer
        case 4:
            answer = "delta";
            break;              // You need to have the break here or it will skip over the previous answer
    }

    return answer;
}

// Change this valuse to test
console.log(caseInSwitch(1)); // This will print out alpha
console.log(caseInSwitch(2)); // This will print out beta
console.log(caseInSwitch(3)); // This will print out gamma
console.log(caseInSwitch(4)); // This will print out delta

/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 = "delta"
*/